import React, { useEffect, useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  FormText,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

// core components
import { useTranslation } from 'react-i18next';
import { Progress } from 'react-sweet-progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faGear, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FileUploader } from 'react-drag-drop-files';

import 'react-sweet-progress/lib/style.css';
import { Divider } from '@mui/material';
import axios from 'axios';

function Cerebrum(props) {
  const { t } = useTranslation();

  const [file, setFile] = useState(null);
  const [base64File, setBase64File] = useState([]);
  const [data, setData] = useState([]);

  const [chkbxDetection, setChkbxDetection] = useState(false);
  const [chkbxClassification, setChkbxClassification] = useState(false);
  const [chkbxSegmentation, setChkbxSegmentation] = useState(false);

  const [detectionModels, setDetectionModels] = useState([]);
  const [classificationModels, setClassificationModels] = useState([]);
  const [segmentationModels, setSegmentationModels] = useState([]);

  const [isFetching, setIsFetching] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const BACKEND_URL = process.env.REACT_APP_CEREBRUM_BACKEND_URL;

  const [response, setResponse] = useState({});

  useEffect(() => {
    if (isFirstLoad) {
      fetchModels();
      setIsFirstLoad(false);
    }
  });

  const fetchModels = () => {
    setIsFetching(true);
    setIsLoading(true);

    axios({
      method: 'get',
      url: 'http://localhost:6969/models',
    })
      .then(response => {
        console.log(response);

        const detection = JSON.stringify(response.data.detectionModels);

        setDetectionModels(response.data.detectionModels);
        setClassificationModels(response.data.classificationModels);
        setSegmentationModels(response.data.segmentationModels);

        console.log(detectionModels);
        console.log(detection);
        console.log(classificationModels);
        console.log(segmentationModels);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsFetching(false);
        setIsLoading(false);
      });
  };

  const createRequestJson = () => {
    return JSON.stringify({
      enableDetection: chkbxDetection,
      enableClassification: chkbxClassification,
      enableSegmentation: chkbxSegmentation,
      detectionModel: 'v1',
      classificationModel: 'v1',
      segmentationModel: 'v1',
      downloadResults: true,
      image: base64File,
      imageName: file.name,
    });
  };

  const convertImageToBase64 = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const encodedImage = reader.result;
      setBase64File(encodedImage);
    };
  };

  const sendForm = () => {
    setIsFetching(true);
    setIsLoading(true);
    const json = createRequestJson();

    axios({
      method: 'post',
      url: 'http://localhost:6969/predict',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      data: json,
    })
      .then(response => {
        console.log(response);
        setResponse(JSON.stringify(response));
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsFetching(false);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6">
              <Card style={{ minHeight: '80vh' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon className="text-primary" icon={faUpload} /> {t('brain_upload_files')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <FileUploader
                        multiple={false}
                        name="file"
                        type={['jpeg', 'png']}
                        handleChange={file => {
                          setFile(file);
                          convertImageToBase64(file);
                          console.log(file);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <form>
                        <FormGroup>
                          <Button color="primary">
                            <Input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                            aaaaaaaaaaa
                          </Button>
                        </FormGroup>
                      </form>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <p>Ejemplo (80kb)</p>
                      <FontAwesomeIcon className="text-right" icon={faClose}></FontAwesomeIcon>
                      <Progress
                        percent={80}
                        status="success"
                        theme={{
                          default: {
                            symbol: '🧠',
                            color: '#00DB8D',
                          },
                        }}
                      />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <p>Ejemplo (80kb)</p>
                    </Col>
                    <Col className="text-right">
                      <FontAwesomeIcon className="text-right" icon={faClose}></FontAwesomeIcon>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Progress
                        percent={80}
                        status="default"
                        theme={{
                          default: {
                            symbol: '🍕',
                            color: '#ff8900',
                          },
                        }}
                      />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <p>Ejemplo (80kb)</p>
                      <FontAwesomeIcon className="text-right" icon={faClose}></FontAwesomeIcon>
                      <Progress
                        percent={80}
                        status="error"
                        theme={{
                          default: {
                            symbol: '🧠',
                            color: '#ff8900',
                          },
                        }}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col md="6">
              <Card style={{ minHeight: '80vh' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon className="text-primary" icon={faGear} /> {t('brain_config_prediction')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <form>
                    <FormGroup>
                      <Label for="exampleEmail">{t('brain_detection_config_title')}</Label>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            onClick={e => {
                              setChkbxDetection(!chkbxDetection);
                            }}
                          />{' '}
                          {t('brain_detection_config_checkbox')}
                          <span className="form-check-sign">
                            <span className="check"></span>
                          </span>
                        </Label>
                      </FormGroup>
                      <br></br>
                      <FormGroup>
                        <Label for="inputState">{t('brain_config_model_select')}</Label>
                        <Input type="select" name="select" id="inputState">
                          {Array.from(detectionModels).forEach(model => {
                            return (
                              <>
                                <option>{model}</option>
                              </>
                            );
                          })}
                          <option>Choose...</option>
                          <option>...</option>
                        </Input>
                      </FormGroup>
                      <FormText color="muted">{t('brain_detection_config_desc')}</FormText>
                      <Divider className="divider" />
                      <Label for="exampleEmail">{t('brain_classification_config_title')}</Label>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            onClick={e => {
                              setChkbxClassification(!chkbxClassification);
                            }}
                          />{' '}
                          {t('brain_classification_config_checkbox')}
                          <span className="form-check-sign">
                            <span className="check"></span>
                          </span>
                        </Label>
                      </FormGroup>
                      <br></br>
                      <FormGroup>
                        <Label for="inputState">{t('brain_config_model_select')}</Label>
                        <Input type="select" name="select" id="inputState">
                          <option>Choose...</option>
                          <option>...</option>
                        </Input>
                      </FormGroup>
                      <FormText color="muted">{t('brain_classification_config_desc')}</FormText>
                      <Divider className="divider" />
                      <Label for="exampleEmail">{t('brain_segmentation_config_title')}</Label>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            onClick={e => {
                              setChkbxSegmentation(!chkbxSegmentation);
                            }}
                          />{' '}
                          {t('brain_segmentation_config_checkbox')}
                          <span className="form-check-sign">
                            <span className="check"></span>
                          </span>
                        </Label>
                      </FormGroup>
                      <br></br>
                      <FormGroup>
                        <Label for="inputState">{t('brain_config_model_select')}</Label>
                        <Input type="select" name="select" id="inputState">
                          <option>Choose...</option>
                          <option>...</option>
                        </Input>
                      </FormGroup>
                      <FormText color="muted">{t('brain_segmentation_config_desc')}</FormText>
                    </FormGroup>
                    <Divider className="divider" />
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> {t('brain_config_download')}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> {t('brain_config_accept_terms')}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <br></br>
                    <Button
                      color="primary"
                      type="button"
                      onClick={() => {
                        sendForm();
                      }}
                    >
                      {t('accept')}
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Cerebrum;

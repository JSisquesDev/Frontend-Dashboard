import React, { useCallback, useEffect, useState } from 'react';
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
  Spinner,
} from 'reactstrap';

// core components
import { useTranslation } from 'react-i18next';
import { Progress } from 'react-sweet-progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faClose, faGear, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FileUploader } from 'react-drag-drop-files';

import 'react-sweet-progress/lib/style.css';
import { Alert, Divider } from '@mui/material';
import axios from 'axios';

import CustomDropzone from '../components/CustomDropzone/CustomDropzone.js';

function Cerebrum(props) {
  const { t } = useTranslation();

  const [file, setFile] = useState(null);
  const [base64File, setBase64File] = useState([]);
  const [data, setData] = useState([]);

  const [chkbxDetection, setChkbxDetection] = useState(false);
  const [chkbxClassification, setChkbxClassification] = useState(false);
  const [chkbxSegmentation, setChkbxSegmentation] = useState(false);

  const [detectionModels, setDetectionModels] = useState({});
  const [classificationModels, setClassificationModels] = useState({});
  const [segmentationModels, setSegmentationModels] = useState({});

  const [detectionModelSelected, setDetectionModelSelected] = useState('');
  const [classificationModelSelected, setClassificationModelSelected] = useState('');
  const [segmentationModelSelected, setSegmentationModelSelected] = useState('');

  const [isFetching, setIsFetching] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [showAlert, setShowAlert] = useState(false);

  const BACKEND_URL = process.env.REACT_APP_CEREBRUM_BACKEND_URL;

  const [predictResponse, setPredictResponse] = useState({});

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
      url: 'http://localhost:5000/models',
    })
      .then(response => {
        const data = JSON.stringify(response.data);

        setDetectionModels(response.data.detection);
        setClassificationModels(response.data.classification);
        setSegmentationModels(response.data.segmentation);
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
      detectionModel: detectionModelSelected,
      classificationModel: classificationModelSelected,
      segmentationModel: segmentationModelSelected,
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
    if (!file) {
      setShowAlert(true);
      return;
    }

    setIsFetching(true);
    setIsLoading(true);
    const json = createRequestJson();

    axios({
      method: 'post',
      url: 'http://localhost:5000/predict',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      data: json,
    })
      .then(response => {
        setPredictResponse(response.data);
        console.log(predictResponse);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsFetching(false);
        setIsLoading(false);
      });
  };

  const handleFileUpload = file => {
    setFile(file);
    convertImageToBase64(file);
  };

  const handleSelectChangeDetection = event => {
    setDetectionModelSelected(event.target.value);
  };

  const handleSelectChangeClassification = event => {
    setClassificationModelSelected(event.target.value);
  };

  const handleSelectChangeSegmentation = event => {
    setSegmentationModelSelected(event.target.value);
  };

  if (isLoading) {
    return (
      <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Col md="12" style={{ display: 'flex' }}>
          <Card style={{ flex: 1 }}>
            <CardBody style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Spinner>adasd</Spinner>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  } else {
    return (
      <>
        <div className="content">
          <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Col md="6" style={{ display: 'flex' }}>
              <Card style={{ flex: 1, minHeight: '80vh' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon className="text-primary" icon={faUpload} /> {t('brain_upload_files')}
                  </CardTitle>
                </CardHeader>
                <CardBody style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Row style={{ flex: '1 0 50%' }}>
                    <Col>
                      <CustomDropzone handleFileUpload={handleFileUpload} style={{ backgroundColor: '#fafafa' }}>
                        {({ getRootProps, getInputProps }) => (
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                          </div>
                        )}
                      </CustomDropzone>
                    </Col>
                  </Row>
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
            <Col md="6" style={{ display: 'flex' }}>
              <Card style={{ flex: 1, minHeight: '80vh' }}>
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
                        <Input type="select" name="select" id="inputState" onChange={handleSelectChangeDetection}>
                          {Object.keys(detectionModels).map((model, index) => (
                            <option key={index} value={model}>
                              {model.charAt(0).toUpperCase() + model.slice(1)} {detectionModels[model].binary_accuracy} {'%'}
                            </option>
                          ))}
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
                        <Input type="select" name="select" id="inputState" onChange={handleSelectChangeClassification}>
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
                        <Input type="select" name="select" id="inputState" onChange={handleSelectChangeSegmentation}>
                          {Object.keys(segmentationModels).map((model, index) => (
                            <option key={index} value={model}>
                              {model.charAt(0).toUpperCase() + model.slice(1)} {segmentationModels[model].dice_coef} {'%'}
                            </option>
                          ))}
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
                    {showAlert && (
                      <Alert severity="error" onClose={() => setShowAlert(false)}>
                        {t('brain_config_file_upload_not_found')}
                      </Alert>
                    )}
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

          {Object.keys(predictResponse).length != 0 && (
            <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Col md="12" style={{ display: 'flex' }}>
                <Card style={{ flex: 1 }}>
                  <CardHeader>
                    <CardTitle tag="h4">
                      <FontAwesomeIcon className="text-primary" icon={faCircleInfo} /> {t('brain_predict_results')}
                    </CardTitle>
                  </CardHeader>
                  <CardBody style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {!isLoading && (
                      <Row style={{ flex: '1' }}>
                        <Col md="6">
                          <img
                            src={'data:image/png;base64,' + predictResponse['segmentation'].original}
                            alt="Original"
                            style={{ width: '100%', height: 'auto' }}
                          />
                          <p style={{ width: '100%', height: 'auto', textAlign: 'center', marginTop: '1vh' }}>Imagen original</p>
                        </Col>
                        <Col md="6">
                          <img
                            src={'data:image/png;base64,' + predictResponse['segmentation'].mask}
                            alt="Prediction"
                            style={{ width: '100%', height: 'auto' }}
                          />
                          <p style={{ width: '100%', height: 'auto', textAlign: 'center', marginTop: '1vh' }}>Imagen predicha</p>
                        </Col>
                      </Row>
                    )}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </div>
      </>
    );
  }
}

export default Cerebrum;

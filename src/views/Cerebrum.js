import React, { useCallback, useEffect, useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
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
      url: 'http://localhost:5080/models',
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

    console.log(json);

    axios({
      method: 'post',
      url: 'http://localhost:5080/predict',
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
                      <CustomDropzone handleFileUpload={handleFileUpload} className="dropzone">
                        {({ getRootProps, getInputProps }) => (
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>{t('brain_drag_and_drop_files')}</p>
                          </div>
                        )}
                      </CustomDropzone>
                    </Col>
                  </Row>
                  {file && base64File && (
                    <Row style={{ marginBottom: '16px', marginTop: '16px' }}>
                      <Col md="12">
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                          {/* Mostrar la imagen si base64File está disponible */}
                          {base64File && (
                            <img
                              src={base64File}
                              alt={file.name}
                              style={{ width: '64px', height: '64px', objectFit: 'cover', marginRight: '16px' }}
                            />
                          )}
                          <p
                            style={{
                              flex: 1,
                              marginRight: '16px',
                            }}
                          >
                            {file ? `${file.name} (${(file.size / 1024).toFixed(0)}kb)` : 'No file uploaded'}
                          </p>
                          <Progress style={{ flex: 3, margin: '0 16px' }} percent={100} status="success" />
                          <FontAwesomeIcon
                            style={{ flex: 0, cursor: 'pointer' }}
                            icon={faClose}
                            onClick={() => {
                              setFile(null);
                              setBase64File('');
                            }} // Resetea el archivo y la vista previa
                          />
                        </div>
                      </Col>
                    </Row>
                  )}
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
                      <Label for="exampleEmail" tag="h6">
                        {t('brain_detection_config_title')}
                      </Label>
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
                      <Divider className="divider" style={{ marginBottom: '1em' }} />
                      <Label for="exampleEmail" tag="h6">
                        {t('brain_classification_config_title')}
                      </Label>
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
                      <Divider className="divider" style={{ marginBottom: '1em' }} />
                      <Label for="exampleEmail" tag="h6">
                        {t('brain_segmentation_config_title')}
                      </Label>
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
                          <option key={0} value={'all'}>
                            {t('brain_select_all')}
                          </option>
                          {Object.keys(segmentationModels).map((model, index) => (
                            <option key={index + 1} value={model}>
                              {model.charAt(0).toUpperCase() + model.slice(1)} {segmentationModels[model].dice_coef} {'%'}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </FormGroup>
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
                      style={{ width: '100%' }}
                    >
                      {t('accept')}
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {Object.keys(predictResponse).length != 0 && !isLoading && (
            <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Col md="12" style={{ display: 'flex' }}>
                <Card style={{ flex: 1 }}>
                  <CardHeader>
                    <CardTitle tag="h4">
                      <FontAwesomeIcon className="text-primary" icon={faCircleInfo} /> {t('brain_predict_results')}
                    </CardTitle>
                  </CardHeader>
                  <CardBody style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Row style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                      <Col
                        md="4"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                        }}
                      >
                        <h4>{file.name}</h4>
                        <h4 style={{ marginBottom: '0.5em' }}>Detección</h4>
                        <p style={{ marginTop: '0.5em', marginBottom: '0.5em' }}>{t('brain_used_model')}: </p>
                        <p style={{ marginTop: '0.5em', marginBottom: '0.5em' }}>{t('brain_detected')}:</p>
                        {/*<h4 style={{ marginBottom: '0.5em' }}>Clasificación</h4>
                        <p style={{ marginTop: '0.5em', marginBottom: '0.5em' }}>{t('brain_used_model')}: </p>
                        <p style={{ marginTop: '0.5em', marginBottom: '0.5em' }}>{t('brain_classification_type')}:</p>*/}
                        <h4 style={{ marginBottom: '0.5em' }}>Segmentación</h4>
                        <p style={{ marginTop: '0.5em', marginBottom: '0.5em' }}>{t('brain_used_model')}: </p>
                      </Col>
                      <Col
                        md="4"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <p style={{ textAlign: 'center' }}>Imagen original</p>
                        <img
                          src={'data:image/png;base64,' + predictResponse['segmentation'].original}
                          alt="Original"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </Col>
                      <Col
                        md="4"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <p style={{ textAlign: 'center' }}>Imagen predicha</p>
                        <img
                          src={'data:image/png;base64,' + predictResponse['segmentation'].mask}
                          alt="Prediction"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </Col>
                    </Row>
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

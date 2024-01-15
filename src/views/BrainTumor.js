import React from 'react';
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
import { chartExample1, chartExample2, chartExample3, chartExample4 } from 'variables/charts.js';
import { useTranslation } from 'react-i18next';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faGear, faUpload } from '@fortawesome/free-solid-svg-icons';

function BrainTumor(props) {
  const { t } = useTranslation();
  const [bigChartData, setbigChartData] = React.useState('data1');

  const setBgChartData = name => {
    setbigChartData(name);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <Card style={{ minHeight: '80vh' }}>
              <CardHeader>
                <CardTitle tag="h4">
                  <FontAwesomeIcon className="text-secondary" icon={faUpload} /> {t('brain_upload_files')}
                </CardTitle>
              </CardHeader>
              <CardBody>
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
                    <ProgressBar variant="info" animated min={0} max={100} now={60} label={'60%'} />
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <p>Ejemplo (80kb)</p>
                    <FontAwesomeIcon className="text-right" icon={faClose}></FontAwesomeIcon>
                    <ProgressBar variant="success" animated min={0} max={100} now={100} label={'100%'} />
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <p>Ejemplo (80kb)</p>
                    <FontAwesomeIcon className="text-right" icon={faClose}></FontAwesomeIcon>
                    <ProgressBar variant="danger" animated min={0} max={100} now={100} label={'100%'} />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card style={{ minHeight: '80vh' }}>
              <CardHeader>
                <CardTitle tag="h4">
                  <FontAwesomeIcon className="text-secondary" icon={faGear} /> {t('brain_config_prediction')}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <form>
                  <FormGroup>
                    <Label for="exampleEmail">{t('brain_detection_config_title')}</Label>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> {t('brain_detection_config_checkbox')}
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
                    <FormText color="muted">{t('brain_detection_config_desc')}</FormText>
                    <br></br>
                    <Label for="exampleEmail">{t('brain_classification_config_title')}</Label>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> {t('brain_classification_config_checkbox')}
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
                    <br></br>
                    <Label for="exampleEmail">{t('brain_segmentation_config_title')}</Label>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> {t('brain_segmentation_config_checkbox')}
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
                  <br></br>
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
                  <Button color="primary" type="submit">
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

export default BrainTumor;

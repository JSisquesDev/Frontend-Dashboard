/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { faCuttlefish, faGithub, faJava, faJsSquare, faLinkedin, faPython, faReact, faUbuntu } from '@fortawesome/free-brands-svg-icons';
import {
  faBriefcase,
  faCode,
  faComputer,
  faDatabase,
  faEarthEurope,
  faEnvelope,
  faGraduationCap,
  faMobile,
  faNetworkWired,
  faSchool,
  faShieldHalved,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
// nodejs library that concatenates classes
// react plugin used to create charts
import { Line } from 'react-chartjs-2';

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';

// core components
import { chartExample4 } from 'variables/charts.js';

import { useTranslation } from 'react-i18next';

import axios from '../settings/axios';
import CircleProgress from 'components/Charts/CircleProgress';

function CurriculumVitae(props) {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const [curriculumVitae, setCurriculumVitae] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      axios
        .get()
        .then(function (response) {
          // handle success
          const json = response.data;

          setCurriculumVitae(json);
          setIsLoading(false);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setIsLoading(false);
        })
        .finally(function () {
          // always executed
        });
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Cargando</h1>;
  } else {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="5">
              <Card style={{ height: '20rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon icon={faUser} className="tim-icons text-secondary" /> {t('personal_data')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="5" className="text-center">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img alt="..." className="image-rounded" src={require('assets/img/jsisques.jpeg')} />
                      </a>
                    </Col>
                    <Col xs="7">
                      <Row>
                        <h2 className="title">
                          {curriculumVitae.personalData[0].name}
                          <br></br>
                          <p>
                            <small className="text-muted">
                              <i>{curriculumVitae.personalData[0].job}</i>
                            </small>
                          </p>
                        </h2>
                      </Row>
                      <Row>
                        <Col className="font-icon-list text-secondary" xs="0">
                          <FontAwesomeIcon icon={faEnvelope} className="tim-icons" />
                        </Col>
                        <Col className="font-icon-list" xs="11">
                          <a href="mailto:" target="_blank" rel="noreferrer" onClick={e => e.preventDefault()}>
                            <p>{curriculumVitae.personalData[0].email}</p>
                          </a>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="font-icon-list text-secondary" xs="0">
                          <FontAwesomeIcon icon={faMobile} className="tim-icons" />
                        </Col>
                        <Col className="font-icon-list" xs="11">
                          <a href="tel:+34659761003" target="_blank" rel="noreferrer" onClick={e => e.preventDefault()}>
                            <p>{curriculumVitae.personalData[0].phone}</p>
                          </a>
                        </Col>
                      </Row>
                      {curriculumVitae.socialMedia.map((media, i) => {
                        const url = media.url;
                        const name = media.name;
                        const icon = media.icon;

                        return (
                          <>
                            <Row>
                              <Col className="font-icon-list text-secondary" xs="0">
                                <FontAwesomeIcon icon={faGithub} className="tim-icons" />
                              </Col>
                              <Col className="font-icon-list" xs="11">
                                <a href={url} target="_blank" rel="noreferrer" onClick={e => e.preventDefault()}>
                                  <p>{name}</p>
                                </a>
                              </Col>
                            </Row>
                          </>
                        );
                      })}
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="7">
              <Card style={{ height: '20rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon icon={faGraduationCap} className="tim-icons text-secondary" /> {t('studies')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    {curriculumVitae.studies.map((study, i) => {
                      const name = study.name;
                      const location = study.location;
                      const startYear = study.start_year;
                      const endYear = study.end_year;

                      return (
                        <>
                          <Col md="4">
                            <Row>
                              <Col className="text-center text-secondary" md="2">
                                <FontAwesomeIcon icon={faGraduationCap} className="tim-icons" />
                              </Col>
                              <Col md="10">
                                <Row>
                                  <h4 className="title">{name}</h4>
                                </Row>
                                <Row>
                                  <p>{location}</p>
                                </Row>
                                <Row>
                                  <p>
                                    <small className="text-muted">
                                      <i>
                                        {startYear}-{endYear}
                                      </i>
                                    </small>
                                  </p>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <Card style={{ height: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon icon={faBriefcase} className="tim-icons text-secondary" /> {t('experience')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="4">
                      <Row>
                        <Col className="text-center text-secondary" lg="2">
                          <FontAwesomeIcon icon={faSchool} className="tim-icons" />
                        </Col>
                        <Col lg="10">
                          <Row>
                            <h4 className="title">Estudios Generales</h4>
                          </Row>
                          <Row>
                            <p>Divina Pastora</p>
                          </Row>
                          <Row>
                            <p>
                              <small className="text-muted">
                                <i>2002-2015</i>
                              </small>
                            </p>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="4">
                      <Row>
                        <Col className="text-center text-secondary" lg="2">
                          <FontAwesomeIcon icon={faCode} className="tim-icons" />
                        </Col>
                        <Col lg="10">
                          <Row>
                            <h4 className="title">DAM</h4>
                          </Row>
                          <Row>
                            <p>Universidad Europea</p>
                          </Row>
                          <Row>
                            <p>
                              <small className="text-muted">
                                <i>2018-2020</i>
                              </small>
                            </p>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="4">
                      <Row>
                        <Col className="text-center text-secondary" lg="2">
                          <FontAwesomeIcon icon={faShieldHalved} className="tim-icons" />
                        </Col>
                        <Col lg="10">
                          <Row>
                            <h4 className="title">Curso Ciberseguridad</h4>
                          </Row>
                          <Row>
                            <p>Incibe</p>
                          </Row>
                          <Row>
                            <p>
                              <small className="text-muted">
                                <i>2016</i>
                              </small>
                            </p>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card style={{ height: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon icon={faCode} className="tim-icons text-secondary" /> {t('languages')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    {curriculumVitae.languages.map((language, i) => {
                      const name = language.name;
                      const value = language.value;

                      return (
                        <>
                          <Col md="4">
                            <Row>
                              <Col className="text-center text-secondary" md="3">
                                <FontAwesomeIcon icon={faCode} className="tim-icons" />
                              </Col>
                              <Col md="9">
                                <Row>
                                  <h4 className="title">{name}</h4>
                                </Row>
                              </Col>
                            </Row>
                            <Row></Row>
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <Card style={{ height: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <i className="tim-icons icon-bell-55 text-secondary" /> {t('projects')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <Row>
                        <Col className="text-center" lg="1">
                          <i className="tim-icons icon-bell-55 text-secondary" />
                        </Col>
                        <Col lg="11">
                          <Row>
                            <h4 className="title">Titulo</h4>
                          </Row>
                          <Row>
                            <p>Descripción</p>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col className="text-center" lg="1">
                          <i className="tim-icons icon-bell-55 text-secondary" />
                        </Col>
                        <Col lg="11">
                          <Row>
                            <h4 className="title">Stock Predictor</h4>
                          </Row>
                          <Row>
                            <p>Descripción</p>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <Row>
                        <Col className="text-center" lg="1">
                          <i className="tim-icons icon-bell-55 text-secondary" />
                        </Col>
                        <Col lg="11">
                          <Row>
                            <h4 className="title">Titulo</h4>
                          </Row>
                          <Row>
                            <p>Descripción</p>
                          </Row>
                          <Row>
                            <p>
                              <small className="text-muted">
                                <a href="#" target="_blank" rel="noreferrer" className="text-secondary">
                                  <i>Enlace al proyecto</i>
                                </a>
                              </small>
                            </p>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col className="text-center" lg="1">
                          <i className="tim-icons icon-bell-55 text-secondary" />
                        </Col>
                        <Col lg="11">
                          <Row>
                            <h4 className="title">Titulo</h4>
                          </Row>
                          <Row>
                            <p>Descripción</p>
                          </Row>
                          <Row>
                            <p>
                              <small className="text-muted">
                                <a href="#" target="_blank" rel="noreferrer" className="text-secondary">
                                  <i>Enlace al proyecto</i>
                                </a>
                              </small>
                            </p>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ height: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <i className="tim-icons icon-send text-secondary" /> {t('programs')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    {curriculumVitae.programs.map((program, i) => {
                      const name = program.name;
                      const value = program.value;

                      return (
                        <>
                          <Col md="4">
                            <Row>
                              <Col className="text-center text-secondary" md="3">
                                <FontAwesomeIcon icon={faCode} className="tim-icons" />
                              </Col>
                              <Col md="9">
                                <Row>
                                  <h4 className="title">{name}</h4>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <CircleProgress percentage={value} colour={'red'} />
                            </Row>
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Card style={{ height: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon icon={faEarthEurope} className="tim-icons text-secondary" /> {t('idioms')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <i className="tim-icons icon-single-02" />
                    </Col>
                    <Col>
                      <Row>
                        <p>Español</p>
                      </Row>
                      <Row>
                        <small className="text-muted">
                          <i>Nativo</i>
                        </small>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <i className="tim-icons icon-single-02" />
                    </Col>
                    <Col>
                      <Row>
                        <p>Inglés</p>
                      </Row>
                      <Row>
                        <small className="text-muted">
                          <i>B2</i>
                        </small>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card style={{ height: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <i className="tim-icons icon-bell-55 text-secondary" /> {t('awards')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" lg="1">
                      <i className="tim-icons icon-bell-55 text-secondary" />
                    </Col>
                    <Col lg="11">
                      <Row>
                        <h4 className="title">5ª Posición</h4>
                      </Row>
                      <Row>
                        <p>5ª posición concurso regional programame</p>
                      </Row>
                      <Row>
                        <p>
                          <small className="text-muted">
                            <i>2019</i>
                          </small>
                        </p>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center" lg="1">
                      <i className="tim-icons icon-bell-55 text-secondary" />
                    </Col>
                    <Col lg="11">
                      <Row>
                        <h4 className="title">Finalista</h4>
                      </Row>
                      <Row>
                        <p>competición nacional programame</p>
                      </Row>
                      <Row>
                        <p>
                          <small className="text-muted">
                            <i>2019</i>
                          </small>
                        </p>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center" lg="1">
                      <i className="tim-icons icon-bell-55 text-secondary" />
                    </Col>
                    <Col lg="11">
                      <Row>
                        <h4 className="title">1º premio al mejor PBS</h4>
                      </Row>
                      <Row>
                        <p>(Project Based School) de ciclos formativos de grado superior</p>
                      </Row>
                      <Row>
                        <p>
                          <small className="text-muted">
                            <i>2019</i>
                          </small>
                        </p>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card style={{ height: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <i className="tim-icons icon-bell-55 text-secondary" /> {t('others')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  {curriculumVitae.others.map((object, i) => {
                    const name = object.name;
                    const location = object.location;
                    const startYear = object.start_year;
                    const endYear = object.end_year;
                    return (
                      <Row>
                        <Col>
                          <h6>{name}</h6>
                          <p>{location}</p>
                          <small className="text-muted">
                            <i>
                              {startYear}-{endYear}
                            </i>
                          </small>
                        </Col>
                      </Row>
                    );
                  })}
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card style={{ height: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <i className="tim-icons icon-bell-55 text-secondary" /> {t('about_me')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  {curriculumVitae.aboutMe.map((object, i) => {
                    const name = object.name;
                    const desc = object.description;
                    return (
                      <>
                        <Row>
                          <Col className="font-icon-list" md="2">
                            <i className="tim-icons icon-single-02" />
                          </Col>
                          <Col md="10">
                            <Row>
                              <h4 className="title">{name}</h4>
                            </Row>
                            <Row>
                              <p>{desc}</p>
                            </Row>
                          </Col>
                        </Row>
                        <br></br>
                      </>
                    );
                  })}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default CurriculumVitae;

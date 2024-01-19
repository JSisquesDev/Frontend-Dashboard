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
  faAddressCard,
  faAward,
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
import 'react-sweet-progress/lib/style.css';

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';

import { Progress } from 'react-sweet-progress';

import { useTranslation } from 'react-i18next';

import axios from '../settings/axios';

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
            <Col md="5">
              <Card style={{ minminHeight: '20rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon icon={faUser} className="text-secondary" /> {t('personal_data')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="5" className="text-center">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img alt="..." className="image-rounded" src={require('assets/img/jsisques.jpeg')} />
                      </a>
                    </Col>
                    <Col md="7">
                      <Row>
                        <Col>
                          <h1 className="title">
                            {curriculumVitae.personalData[0].name}
                            <br></br>
                            <p>
                              <h3>
                                <small className="text-muted">
                                  <i>{curriculumVitae.personalData[0].job}</i>
                                </small>
                              </h3>
                            </p>
                          </h1>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <a href="mailto:" target="_blank" rel="noreferrer" onClick={e => e.preventDefault()}>
                            <p>
                              <FontAwesomeIcon className="text-secondary" icon={faEnvelope} /> {curriculumVitae.personalData[0].email}
                            </p>
                          </a>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <a href="tel:+34659761003" target="_blank" rel="noreferrer" onClick={e => e.preventDefault()}>
                            <p>
                              <FontAwesomeIcon icon={faMobile} className="text-secondary" /> {curriculumVitae.personalData[0].phone}
                            </p>
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
                              <Col>
                                <a href={url} target="_blank" rel="noreferrer" onClick={e => e.preventDefault()}>
                                  <p>
                                    <FontAwesomeIcon icon={faGithub} className="text-secondary" /> {name}
                                  </p>
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
            <Col md="7">
              <Card style={{ minminHeight: '20rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-secondary" /> {t('studies')}
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
                              <Col>
                                <h4 className="title">
                                  <FontAwesomeIcon icon={faGraduationCap} className="text-secondary" /> {name}{' '}
                                  <small className="text-muted">
                                    <i>
                                      {'(' + startYear}-{endYear + ')'}
                                    </i>
                                  </small>
                                  <h5>{location}</h5>
                                </h4>
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
            <Col md="8">
              <Card style={{ minHeight: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon icon={faBriefcase} className="text-secondary" /> {t('experience')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="4">
                      <Row>
                        <Col className="text-center text-secondary" lg="2">
                          <FontAwesomeIcon icon={faSchool} className="" />
                        </Col>
                        <Col md="10">
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
                          <FontAwesomeIcon icon={faCode} className="" />
                        </Col>
                        <Col md="10">
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
                          <FontAwesomeIcon icon={faShieldHalved} className="" />
                        </Col>
                        <Col md="10">
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
            <Col md="4">
              <Card style={{ minHeight: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon icon={faCode} className="text-secondary" /> {t('languages')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    {curriculumVitae.languages.map((language, i) => {
                      const name = language.name;
                      const value = language.value;

                      return (
                        <>
                          <Col md="6">
                            <Row>
                              <Col className="text-left">
                                <h4 className="title">
                                  <FontAwesomeIcon icon={faCode} className="text-secondary" /> {name}
                                  <Progress
                                    percent={value}
                                    status="default"
                                    theme={{
                                      default: {
                                        symbol: '🧠',
                                        color: '#ff8900',
                                      },
                                    }}
                                  />
                                </h4>
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
            <Col md="8">
              <Card style={{ minHeight: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <i className="icon-bell-55 text-secondary" /> {t('projects')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <Row>
                        <Col className="text-center" lg="1">
                          <i className="icon-bell-55 text-secondary" />
                        </Col>
                        <Col md="11">
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
                          <i className="icon-bell-55 text-secondary" />
                        </Col>
                        <Col md="11">
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
                          <i className="icon-bell-55 text-secondary" />
                        </Col>
                        <Col md="11">
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
                          <i className="icon-bell-55 text-secondary" />
                        </Col>
                        <Col md="11">
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
              <Card style={{ minHeight: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <i className="icon-send text-secondary" /> {t('programs')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    {curriculumVitae.programs.map((program, i) => {
                      const name = program.name;
                      const value = program.value;

                      return (
                        <>
                          <Col md="6">
                            <Row>
                              <Col className="text-left">
                                <h4 className="title">
                                  <FontAwesomeIcon icon={faCode} className="text-secondary" /> {name}
                                  <Progress
                                    percent={value}
                                    status="default"
                                    theme={{
                                      default: {
                                        symbol: '🧠',
                                        color: '#ff8900',
                                      },
                                    }}
                                  />
                                </h4>
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
            <Col md="3">
              <Card style={{ minHeight: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon icon={faEarthEurope} className="text-secondary" /> {t('idioms')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <i className="icon-single-02" />
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
                      <i className="icon-single-02" />
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
            <Col md="3">
              <Card style={{ minHeight: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon icon={faAward} className="text-secondary" /> {t('awards')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  {curriculumVitae.awards.map((award, i) => {
                    const name = award.name;
                    const desc = award.description;
                    const year = award.year;

                    return (
                      <>
                        <Row>
                          <Col>
                            <h4 className="title">
                              <FontAwesomeIcon icon={faAward} className="text-secondary" /> {name}{' '}
                              <small className="text-muted">
                                <i>{'(' + year + ')'}</i>
                              </small>
                              <h5>{desc}</h5>
                            </h4>
                          </Col>
                        </Row>
                      </>
                    );
                  })}
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card style={{ minHeight: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <i className="icon-bell-55 text-secondary" /> {t('others')}
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
            <Col md="3">
              <Card style={{ minHeight: '25rem' }}>
                <CardHeader>
                  <CardTitle tag="h4">
                    <FontAwesomeIcon icon={faAddressCard} className="text-secondary" /> {t('about_me')}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  {curriculumVitae.aboutMe.map((object, i) => {
                    const name = object.name;
                    const desc = object.description;
                    return (
                      <>
                        <Row>
                          <Col>
                            <Row>
                              <Col>
                                <h4 className="title">
                                  <FontAwesomeIcon icon={faAddressCard} className="text-secondary" /> {name}
                                </h4>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <p>{desc}</p>
                              </Col>
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

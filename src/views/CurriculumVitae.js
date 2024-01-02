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
import { backgroundColors } from 'contexts/BackgroundColorContext';
import React from 'react';
// nodejs library that concatenates classes
// react plugin used to create charts
import { Line } from 'react-chartjs-2';

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';

// core components
import { chartExample2, chartExample4 } from 'variables/charts.js';

function CurriculumVitae(props) {
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="5">
            <Card style={{ height: '20rem' }}>
              <CardHeader>
                <CardTitle tag="h4">
                  <i className="tim-icons icon-single-02 text-secondary" /> Datos Personales
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
                        Javier Plaza Sisqués
                        <br></br>
                        <p>
                          <small className="text-muted">
                            <i>Programador</i>
                          </small>
                        </p>
                      </h2>
                    </Row>
                    <Row>
                      <Col className="font-icon-list" xs="0">
                        <i className="tim-icons text-secondary icon-email-85" />
                      </Col>
                      <Col className="font-icon-list" xs="11">
                        <p>javierplazasisques@gmail.com</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="font-icon-list" xs="0">
                        <i className="tim-icons text-secondary icon-mobile" />
                      </Col>
                      <Col className="font-icon-list" xs="11">
                        <a href="tel:+34659761003" target="_blank" rel="noreferrer" onClick={e => e.preventDefault()}>
                          <p>+34 659 76 10 03</p>
                        </a>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="font-icon-list" xs="0">
                        <i className="tim-icons text-secondary icon-single-02" />
                      </Col>
                      <Col className="font-icon-list" xs="11">
                        <a href="https://github.com/JSisques" target="_blank" rel="noreferrer" onClick={e => e.preventDefault()}>
                          <p>JSisques</p>
                        </a>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="font-icon-list" xs="0">
                        <i className="tim-icons text-secondary icon-single-02" />
                      </Col>
                      <Col className="font-icon-list" xs="11">
                        <a
                          href="https://www.linkedin.com/in/javier-plaza-sisqu%C3%A9s-b79367172/"
                          target="_blank"
                          rel="noreferrer"
                          onClick={e => e.preventDefault()}
                        >
                          <p>Javier Plaza Sisqués</p>
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs="7">
            <Card style={{ height: '20rem' }}>
              <CardHeader>
                <CardTitle tag="h4">
                  <i className="tim-icons icon-single-02 text-secondary" /> Estudios
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="4">
                    <Row>
                      <Col className="text-center" lg="2">
                        <i className="tim-icons icon-bell-55 text-secondary" />
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
                      <Col className="text-center" lg="2">
                        <i className="tim-icons icon-bell-55 text-secondary" />
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
                      <Col className="text-center" lg="2">
                        <i className="tim-icons icon-bell-55 text-secondary" />
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
                <br></br>
                <Row>
                  <Col md="4">
                    <Row>
                      <Col className="text-center" lg="2">
                        <i className="tim-icons icon-bell-55 text-secondary" />
                      </Col>
                      <Col lg="10">
                        <Row>
                          <h4 className="title">SMR</h4>
                        </Row>
                        <Row>
                          <p>I.E.S. San Andrés</p>
                        </Row>
                        <Row>
                          <p>
                            <small className="text-muted">
                              <i>2016-2018</i>
                            </small>
                          </p>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="4">
                    <Row>
                      <Col className="text-center" lg="2">
                        <i className="tim-icons icon-bell-55 text-secondary" />
                      </Col>
                      <Col lg="10">
                        <Row>
                          <h4 className="title">Ingeniería Informática</h4>
                        </Row>
                        <Row>
                          <p>Universidad Europea</p>
                        </Row>
                        <Row>
                          <p>
                            <small className="text-muted">
                              <i>2020-Actualmente</i>
                            </small>
                          </p>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="4">
                    <Row>
                      <Col className="text-center" lg="2">
                        <i className="tim-icons icon-bell-55 text-secondary" />
                      </Col>
                      <Col lg="10">
                        <Row>
                          <h4 className="title">NDG Linux Essentials</h4>
                        </Row>
                        <Row>
                          <p>Cisco</p>
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
                  </Col>
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
                  <i className="tim-icons icon-bell-55 text-secondary" /> Experiencia
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line data={chartExample2.data} options={chartExample2.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card style={{ height: '25rem' }}>
              <CardHeader>
                <CardTitle tag="h4">
                  <i className="tim-icons icon-send text-secondary" /> Lenguajes
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Row>
                      <Col className="text-center" md="2">
                        <i className="tim-icons icon-bell-55 text-secondary" />
                      </Col>
                      <Col md="10">
                        <Row>
                          <h4 className="title">Titulo</h4>
                        </Row>
                        <Row>
                          <p>Descripción</p>
                        </Row>
                        <Row>
                          <p>
                            <small className="text-muted">
                              <a href="https://github.com/JSisquesDev/Dashboard" target="_blank" rel="noreferrer" className="text-secondary">
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
                      <Col className="text-center" md="2">
                        <i className="tim-icons icon-bell-55 text-secondary" />
                      </Col>
                      <Col md="10">
                        <Row>
                          <h4 className="title">Stock Predictor</h4>
                        </Row>
                        <Row>
                          <p>Descripción</p>
                        </Row>
                        <Row>
                          <p>
                            <small className="text-muted">
                              <a href="https://github.com/JSisquesDev/IA-Stock-Predictor" target="_blank" rel="noreferrer" className="text-secondary">
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
        </Row>
        <Row>
          <Col lg="8">
            <Card style={{ height: '25rem' }}>
              <CardHeader>
                <CardTitle tag="h4">
                  <i className="tim-icons icon-bell-55 text-secondary" /> Proyectos
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
                        <Row>
                          <p>
                            <small className="text-muted">
                              <a href="https://github.com/JSisquesDev/Dashboard" target="_blank" rel="noreferrer" className="text-secondary">
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
                          <h4 className="title">Stock Predictor</h4>
                        </Row>
                        <Row>
                          <p>Descripción</p>
                        </Row>
                        <Row>
                          <p>
                            <small className="text-muted">
                              <a href="https://github.com/JSisquesDev/IA-Stock-Predictor" target="_blank" rel="noreferrer" className="text-secondary">
                                <i>Enlace al proyecto</i>
                              </a>
                            </small>
                          </p>
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
          <Col lg="4">
            <Card style={{ height: '25rem' }}>
              <CardHeader>
                <CardTitle tag="h4">
                  <i className="tim-icons icon-send text-secondary" /> Programas
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line data={chartExample4.data} options={chartExample4.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <Card style={{ height: '25rem' }}>
              <CardHeader>
                <CardTitle tag="h4">
                  <i className="tim-icons icon-bell-55 text-secondary" /> Idiomas
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
                  <i className="tim-icons icon-bell-55 text-secondary" /> Premios
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
                  <i className="tim-icons icon-bell-55 text-secondary" /> Otros
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <h6>Vocal suplente consejo de delegados</h6>
                    <p>Universidad Europea</p>
                    <small className="text-muted">
                      <i>2018-2019</i>
                    </small>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Delegado de clase</h6>
                    <p>Universidad Europea</p>
                    <small className="text-muted">
                      <i>2018-2020</i>
                    </small>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Permiso de conducir</h6>
                    <p>Código B</p>
                    <small className="text-muted">
                      <i>2018</i>
                    </small>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card style={{ height: '25rem' }}>
              <CardHeader>
                <CardTitle tag="h4">
                  <i className="tim-icons icon-bell-55 text-secondary" /> Sobre Mi
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="font-icon-list" xs="1">
                    <i className="tim-icons icon-single-02" />
                  </Col>
                  <Col className="font-icon-list">
                    <p>Aprendo y amplio mis conocimientos</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="font-icon-list" xs="1">
                    <i className="tim-icons icon-single-02" />
                  </Col>
                  <Col className="font-icon-list">
                    <p>Me gusta trabajar en equipo</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="font-icon-list" xs="1">
                    <i className="tim-icons icon-single-02" />
                  </Col>
                  <Col className="font-icon-list">
                    <p>Me gusta resolver todo tipo de problemas</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CurriculumVitae;

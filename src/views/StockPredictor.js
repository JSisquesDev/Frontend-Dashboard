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
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';

// reactstrap components
import { Button, ButtonGroup, Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';

// core components
import { chartExample1, chartExample2, chartExample3, chartExample4 } from 'variables/charts.js';
import { Vortex } from 'react-loader-spinner';

function StockPredictor(props) {
  const [bigChartData, setbigChartData] = React.useState('data1');
  const setBgChartData = name => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Shipments</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup className="btn-group-toggle float-right" data-toggle="buttons">
                      <Button
                        tag="label"
                        className={classNames('btn-simple', {
                          active: bigChartData === 'data1',
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData('data1')}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Accounts</span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames('btn-simple', {
                          active: bigChartData === 'data2',
                        })}
                        onClick={() => setBgChartData('data2')}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Purchases</span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames('btn-simple', {
                          active: bigChartData === 'data3',
                        })}
                        onClick={() => setBgChartData('data3')}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Sessions</span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Vortex
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="vortex-loading"
                  wrapperStyle={{}}
                  wrapperClass="vortex-wrapper"
                  colors={[classNames(), 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Apple</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-info" /> APPL
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line data={chartExample2.data} options={chartExample2.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-primary" /> 3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar data={chartExample3.data} options={chartExample3.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line data={chartExample2.data} options={chartExample2.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-primary" /> 3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar data={chartExample3.data} options={chartExample3.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line data={chartExample2.data} options={chartExample2.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-primary" /> 3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar data={chartExample3.data} options={chartExample3.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default StockPredictor;

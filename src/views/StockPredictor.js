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
      <div className="content"> </div>
    </>
  );
}

export default StockPredictor;

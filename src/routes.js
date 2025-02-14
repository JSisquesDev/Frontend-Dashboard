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
import BrainTumor from 'views/BrainTumor';
import CurriculumVitae from 'views/CurriculumVitae';
import Dashboard from 'views/Dashboard.js';
import Home from 'views/Home';
import Icons from 'views/Icons.js';
import Map from 'views/Map.js';
import Notifications from 'views/Notifications.js';
import Settings from 'views/Settings';
import StockPredictor from 'views/StockPredictor';
import TableList from 'views/TableList.js';
import Typography from 'views/Typography.js';
import UserProfile from 'views/UserProfile.js';

var routes = [
  {
    path: '/home',
    name: 'home',
    icon: 'tim-icons icon-chart-pie-36',
    component: <Home />,
    layout: '/admin',
  },
  /*
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'tim-icons icon-chart-pie-36',
    component: <Dashboard />,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: 'tim-icons icon-atom',
    component: <Icons />,
    layout: '/admin',
  },
  {
    path: '/map',
    name: 'Map',
    icon: 'tim-icons icon-pin',
    component: <Map />,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'tim-icons icon-bell-55',
    component: <Notifications />,
    layout: '/admin',
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'tim-icons icon-single-02',
    component: <UserProfile />,
    layout: '/admin',
  },
  {
    path: '/tables',
    name: 'Table List',
    icon: 'tim-icons icon-puzzle-10',
    component: <TableList />,
    layout: '/admin',
  },
  {
    path: '/typography',
    name: 'Typography',
    icon: 'tim-icons icon-align-center',
    component: <Typography />,
    layout: '/admin',
  },
  */
  {
    path: '/curriculum-vitae',
    name: 'curriculum_vitae',
    icon: 'tim-icons icon-paper',
    component: <CurriculumVitae />,
    layout: '/admin',
  },
  {
    path: '/stock-predictor',
    name: 'stock_predictor',
    icon: 'tim-icons icon-chart-bar-32',
    component: <StockPredictor />,
    layout: '/admin',
  },
  {
    path: '/brain-tumor',
    name: 'brain_tumor',
    icon: 'tim-icons icon-chart-bar-32',
    component: <BrainTumor />,
    layout: '/admin',
  },
];
export default routes;

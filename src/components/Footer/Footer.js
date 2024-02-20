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
/*eslint-disable*/
import { faGithub, faGithubAlt, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';

// reactstrap components
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

var packageJson = require('../../../package.json');

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://github.com/JSisquesDev">JSisquesDev</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/JSisques">
              <FontAwesomeIcon icon={faGithub} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/javier-plaza-sisqu%C3%A9s-b79367172/">
              <FontAwesomeIcon icon={faLinkedin} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.tiktok.com/@diariodeuntrex">
              <FontAwesomeIcon icon={faTiktok} />
            </NavLink>
          </NavItem>
          <NavItem></NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} {t('made_with').toLowerCase()} <i className="tim-icons icon-heart-2" /> {t('by').toLowerCase()}{' '}
          <a href="https://github.com/JSisques" target="_blank" className="text-primary">
            JSisques
          </a>{' '}
          v{packageJson.version}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Route, Link } from 'react-router-dom';

const Items = [
  {
    path: '/',
    name: 'Overview'
  },
  {
    path: '/report',
    name: 'The Report'
  },
  {
    path: '/database',
    name: 'The Database'
  },
  {
    path: '/methodology',
    name: 'Methodology'
  },
  {
    path: '/faq',
    name: 'FAQ'
  },
];

const Nav = React.createClass({
  renderMenuLink: function ({path, name}) {
    return (
      <Route exact path={path} children={({ match }) => (
        <li className={'menu-link ' + (match ? 'active-link' : '')}>
          <Link to={path}>{name}</Link>
        </li>
      )}/>
    );
  },

  render: function (props) {
    return (
      <div className="nav">
        <div className="logo-banner">
          <h5>A joint initiative of</h5>
          <a href="http://kenan.ethics.duke.edu/humanrights"><img src="images/org_icons/dhrc-logo.png" /></a>
          <a href="http://www.msi-integrity.org"><img src="images/org_icons/msi-integrity.png" /></a>
        </div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              {Items.map((item) => this.renderMenuLink(item))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

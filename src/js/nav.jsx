import React from 'react';
import { Link } from 'react-router-dom';

const Nav = React.createClass({
  render: function () {
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
              <li className={"menu-link"}>
                <Link to={"/"}>Overview</Link>
              </li>
              <li className={"menu-link"}>
                <Link to={"/report"}>The Report</Link>
              </li>
              <li className={"menu-link"}>
                <Link to={"/database"}>The Database</Link>
              </li>
              <li className={"menu-link"}>
                <Link to={"/methodology"}>Methodology</Link>
              </li>
              <li className={"menu-link"}>
                <Link to={"/faq"}>FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

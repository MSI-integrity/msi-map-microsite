import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import Data from './data';
import Database from './database';
import Footer from './footer';
import FAQ from './faq';
import Report from './report';

var PageContainer = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/report' component={Report} />
          <Route exact path='/methodology' component={Data} />
          <Route exact path='/database' component={Database} />
          <Route exact path='/faq' component={FAQ} />
        </Switch>
        <Footer/>
      </div>
    );
  }
});

module.exports = PageContainer;

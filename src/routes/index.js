import React from 'react';
import { Route, Router, Redirect, IndexRedirect } from 'react-router';

import HomePage from '../pages/home-page';
import ContactPage from '../pages/contacts-page';
import AboutPage from '../pages/about-page';
import UkPage from '../pages/uk-page';


export default () => <Router>
  <Route exact path='/' component={HomePage}/>
  <Route path='/contacts' component={ContactPage}/>
  <Route path='/about' component={AboutPage}/>

  <Route path='company' component={UkPage}>
    <IndexRedirect exact to='/' />
    <Route exact name="company" path=":company">
      <Route exact path="fund">
        <IndexRedirect exact to='/' />
        <Route exact name="fund" path=":fund"/>
      </Route>
    </Route>
  </Route>

</Router>;

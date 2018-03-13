import React, { PropTypes, Component } from 'react';

import './style.scss';

import MainHeader from "../../components/main-header";
import ContactInfoMap from '../../components/contact-info-map';
import Footer from '../../components/footer';
import ContactsAccordion from '../../components/contacts-accordion';

import helper from '../../classes/helper';

class ContactPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    helper.setTitle('Контакты');
  }

  render() {
    return <div className="content-page contact-page">
      <MainHeader/>
      <div>
        <ContactInfoMap/>
        <ContactsAccordion/>
        <Footer/>
      </div>
    </div>
      ;
  }
}

ContactPage.propTypes = {

};

export default ContactPage;

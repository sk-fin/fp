import React, { PropTypes, Component } from 'react';

import SelectedMap from '../selected-map';
import ContactPhones from '../contact-phones';
import WriteToUs from '../write-to-us';

import { langs } from '../../lang/content';

const ContactInfoMap = (state, { }) =>
    <section className="contacts" id="contacts">

      <SelectedMap title={langs.contacts.title}/>

      <ContactPhones/>

      <WriteToUs buttomName={langs.buttons.writeUs}/>

    </section>
  ;

ContactInfoMap.propTypes = {

};

export default ContactInfoMap;

import React, { PropTypes, Component } from 'react';

import Accordion from '../../components/accordion';

import { langs } from '../../lang/content';

const ContactsAccordion = (state, { }) =>
    <section className="article-group">
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <Accordion data={langs.contactAcordion}/>

          </div>
        </div>
      </div>
    </section>
  ;

ContactsAccordion.propTypes = {

};

export default ContactsAccordion;

import React, { PropTypes, Component } from 'react';

import helper from '../../classes/helper';

import { langs } from '../../lang/content';

const ContactPhones = (state, { }) =>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="info">
              <div className="info__adress">
                <div className="toggle-info">
                  {langs.contacts.data[state.activeCity]['address']}
                </div>
              </div>
              <div className="info-tel info-tel_l">
                <span className="info-label">{langs.system.phone}</span>
                <ul className="info-list toggle-info">
                  {langs.contacts.data[state.activeCity]['phones'].map((phone, index) =>
                    <li key={'il-' + index} className="info-list__item">
                      <a href={"tel:" + helper.onlyNumbers(phone)}>{phone}</a>
                    </li>
                  )}
                </ul>
              </div>
              <span className="tel-icon"/>
              <div className="info-tel info-tel_r">
                <span className="info-label">{langs.system.fax}</span>
                <ul className="info-list toggle-info">
                  <li className="info-list__item">{langs.contacts.data[state.activeCity]['fax']}</li>
                  <li className="info-list__item">
                    <a className="tdu" href={"mailto:" + langs.contacts.data[state.activeCity]['email']}>
                      {langs.contacts.data[state.activeCity]['email']}
                      </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  ;

ContactPhones.propTypes = {

};

export default ContactPhones;

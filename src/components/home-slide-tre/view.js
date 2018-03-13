import React, { PropTypes } from 'react';

import SlickInvite from "../slick-invite";
import ContactInfoMap from "../contact-info-map";
import Footer from '../footer';

import { langs } from '../../lang/content';

const HomeSlideTre = ({  }) =>
  <div>

    <ContactInfoMap/>

    <SlickInvite/>


    <Footer/>

  </div>;

HomeSlideTre.propTypes = {

};

export default HomeSlideTre;

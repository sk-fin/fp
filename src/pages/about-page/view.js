import React, { PropTypes, Component } from 'react';

import './style.scss';

import MainHeader from "../../components/main-header";
import SlickAbout from "../../components/slick-about";
import CompanyStandarts from "../../components/company-standarts";
import FormConnectToServer from "../../components/form-connect-to-server";
import Footer from "../../components/footer";
import SlickInvite from "../../components/slick-invite";
import InfoMarket from "../../components/info-market";
import Dynamics from "../../components/dynamics";
import BottomBanner from "../../components/bottom-banner";

import helper from '../../classes/helper';
import { langs } from '../../lang/content';

class AboutPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    helper.setTitle('О компании');
  }

  render() {
    return <div className="content-page contact-page">
      <MainHeader/>
      <div>

        <SlickAbout/>

        <CompanyStandarts/>

        <FormConnectToServer/>

        <InfoMarket/>

        <Dynamics/>

        <SlickInvite/>

        <BottomBanner/>

        <Footer/>

      </div>
    </div>;
  }
}

AboutPage.propTypes = {

};

export default AboutPage;

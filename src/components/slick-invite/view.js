import React, { PropTypes, Component } from 'react';
import Slider from 'react-slick';

//Контейнер
import grayBlockWithTitle from "../../containers/gray-block-with-title";

import { langs } from '../../lang/content';
import API from '../../classes/api';

class SlickInvite extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.loadCompanyList();
    }

    loadCompanyList() {
        if (!this.props.loadingUkList && this.props.ukList.length == 0) {
            this.props.onLoadUkLIst(true);
            API.getCompanies().then(data => {
                this.props.loadUkLIst(data);
            });
        }
    }

    render() {
        return <Slider {...this.props.settings}>
            {this.props.ukList.map((logo, index) =>
              <div key={'lg-' + index}>
                  <a href={logo.url}>
                      <img src={logo.logoURL} alt=""/>
                  </a>
              </div>
            )}
        </Slider>;
    }
}

SlickInvite.propTypes = {

};

export default grayBlockWithTitle(SlickInvite, langs.invites.title, 'slider');


import React, { PropTypes, Component } from 'react';

import './style.scss';

import MainHeader from "../../components/main-header";
import FundDescription from "../../components/fund-description";
import Footer from '../../components/footer';

import { langs } from '../../lang/content';
import helper from '../../classes/helper';
import API from '../../classes/api';

class FundPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return <FundDescription fund={this.props.params.fund}/>;
  }
}

FundPage.propTypes = {

};

export default FundPage;

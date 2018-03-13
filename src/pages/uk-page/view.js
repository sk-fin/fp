import React, { PropTypes, Component } from 'react';

import './style.scss';

import MainHeader from "../../components/main-header";
import CompanyDescription from "../../components/company-description";
import Footer from '../../components/footer';

class UkPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return <div className="content-page contact-page">
      <MainHeader/>
      <div>
        <CompanyDescription {...this.props} company={this.props.params.company}/>
        <Footer/>
      </div>
    </div>;
  }
}

UkPage.propTypes = {

};

export default UkPage;

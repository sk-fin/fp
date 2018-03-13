import React, { PropTypes, Component } from 'react';
import HtmlParser from 'html-react-parser';

import helper from '../../classes/helper';

import { langs } from '../../lang/content';
import ButtonConnectToServer from '../../components/button-connect-to-server';

class BottomBanner extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return <section className="bottom-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="big-title big-title_deco-closer white">{langs.bottomBanner.title}</h1>
            <p className="simple-text simple-text_center simple-text_narrow white">{HtmlParser(langs.bottomBanner.description)}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ButtonConnectToServer buttomName={langs.buttons.client} buttomClass={'button popup-connect'}/>
          </div>
        </div>
      </div>
    </section>;
  }
}

BottomBanner.propTypes = {

};


export default BottomBanner;

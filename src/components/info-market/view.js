import React, { PropTypes, Component } from 'react';
import HtmlParser from 'html-react-parser';

import helper from '../../classes/helper';

import { langs } from '../../lang/content';

class InfoMarket extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return <section className="article">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="h5">{langs.infoMarket.title}</h5>
            <div className="m-text">{HtmlParser(langs.infoMarket.description)}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="files2dl">
              {langs.infoMarket.files.map((item, index) =>
                <a key={'v' + index} target="_blank" href={item.url} className="files2dl__link">{item.title}</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

InfoMarket.propTypes = {

};


export default InfoMarket;

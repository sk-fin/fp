import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { langs } from '../../lang/content';

import helper from '../../classes/helper';
import API from '../../classes/api';

class UkSmallList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.loadFundsList();
  }

  loadFundsList() {
    if (!this.props.loadingUkList  && this.props.ukList.length == 0) {
      this.props.onLoadUkLIst(true);
      API.getCompanies().then(data => {
        this.props.loadUkLIst(data);
      });
    }
  }

  render() {
    return <div className={["main-screen-toggle", this.props.showUkLIst || this.props.showUkLIstMobile ? '' : 'hidden'].join(' ')}>
      <div className="list-uk-wrapper">
        { this.props.showUkLIst &&
          <div onClick={() => this.props.onShowUkLIst()} className="list-uk-close screen-toggle">{langs.buttons.close}</div>
        }
        { this.props.showUkLIstMobile &&
          <div onClick={() => this.props.onShowUkLIstMobile()} className="list-uk-close screen-toggle">{langs.buttons.close}</div>
        }
        <div className="list-uk-title">{langs.selectUk}</div>
        <ul className={["list-uk", this.props.loadingUkList ? 'loader dark' : ''].join(' ')}>
          {this.props.ukList.map((item, index) =>
            <li key={'lu-' + index} className="list-uk__item">
              <Link to={'/company/' + item.prtId}>{item.shortName}</Link>
            </li>
          )}
        </ul>
      </div>
    </div>;
  }
}

UkSmallList.propTypes = {

};

export default UkSmallList;

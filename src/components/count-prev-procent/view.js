import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { langs } from './lang';

import helper from '../../classes/helper';
import Calculate from '../../classes/calculate';
import API from '../../classes/api';
import Moment from 'moment';

class CountPrevProcent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navs: [],
    };
  }

  componentWillMount() {
    this.getNav();
  }

  getNav() {
    API.getFundNav(this.props.fund).then(data => {
      this.setState({
        navs: data.slice(-2).reverse(),
      });
    });
  }

  render() {
    Moment.locale('ru');
    return <div>
      <div className="h5 h5_left">{this.props.title}</div>
      <table className="table">
        <tbody>
        <tr>
          <th/>
          {this.state.navs.map((item, index) =>
            <th key={'p' + index}>{Moment(item.dataDate).format('DD.MM.YYYY')}</th>
          )}
          <th>{langs.change}</th>
        </tr>
        <tr>
          <th>{langs.pai}</th>
          {this.state.navs.map((item, index) =>
            <th key={'p' + index}>{item.navOne} ₽</th>
          )}
          {this.state.navs[0] && this.state.navs[1] &&
          <td className={Calculate.diffProcent(this.state.navs[0].navOne, this.state.navs[1].navOne) > 0 ? 'green' : 'red' }>
            {Calculate.diffProcent(this.state.navs[0].navOne, this.state.navs[1].navOne)} %
          </td>
          }

        </tr>
        <tr>
          <th>{langs.scha}</th>
          {this.state.navs.map((item, index) =>
            <th key={'p' + index}>{item.navAll} ₽</th>
          )}
          { this.state.navs[0] && this.state.navs[1] &&
          <td className={Calculate.diffProcent(this.state.navs[0].navAll, this.state.navs[1].navAll) > 0 ? 'green' : 'red' }>
            {Calculate.diffProcent(this.state.navs[0].navAll, this.state.navs[1].navAll)} %
          </td>
          }
        </tr>
        </tbody>

      </table>
    </div>
      ;
  }
}

CountPrevProcent.propTypes = {
  title: PropTypes.string.isRequired,
  fund: PropTypes.number.isRequired,
};

export default CountPrevProcent;

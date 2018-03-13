import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { langs } from './lang';

import helper from '../../classes/helper';
import Calculate from '../../classes/calculate';
import API from '../../classes/api';
import Moment from 'moment';

import {Doughnut} from 'react-chartjs-2';

class StructureFund extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      loaded: false,
    };
  }

  componentDidMount() {
    this.getNav();
  }

  getNav() {
    if (this.props.fundTypes.length > 0) {
      this.setDefaultState(this.props.fundTypes);
    } else {
      API.getFundTypes().then(data => {
        this.setDefaultState(data);
        this.props.loadFundTypes(data);
      });
    }
  }

  setDefaultState (data) {
    this.setState({
      types: data.listItem,
      loaded: true
    });
  }

  findType(type) {
    return this.state.types.filter(item => item.code == type)[0];
  }

  render() {
    var th = this;

    Moment.locale('ru');
    return <div>
      { this.state.loaded &&
        <div>
          <div className="h5 h5_left">
            {this.props.title}
            <div className="date">{langs.moment} {Moment(this.props.date).format('DD.MM.YYYY')}</div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-6">
              <div className="structure">
                <div className="structure__title">{langs.structure}</div>
                <Doughnut id="myChart" width={100} height={100}
                          data={{
                            labels: this.props.structure.filter(item => item.value > 0).map(function(item) {
                              return th.findType(item.type).name;
                            }),
                            datasets: [{
                              data: this.props.structure.filter(item => item.value > 0).map(function(item) {
                                return item.value;
                              }),
                              backgroundColor: ['#e86a76', '#bf0417', '#ef1329', '#a00310'],
                              borderWidth: 0,
                            }],
                          }}
                          legend={{
                            display: false,
                            fullWidth: true,
                          }}
                          options={{
                            cutoutPercentage: 75,
                          }}
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-6">
              { this.state.loaded &&
              <ul className="structure-list">
                {this.props.structure.filter(item => item.value > 0).map((item, index) =>
                  <li key={'p' + index} className="structure-list-item structure-list-item_1">
                    <div className="structure-list-item__number">{item.value} %</div>
                    <div className="structure-list-item__title">{this.findType(item.type).name}</div>
                  </li>
                )}
              </ul>
              }

            </div>
          </div>
        </div>
      }

    </div>
      ;
  }
}

StructureFund.propTypes = {
  title: PropTypes.string.isRequired,
  structure: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
};

export default StructureFund;

import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { langs } from '../../lang/content';

import helper from '../../classes/helper';
import Calculate from '../../classes/calculate';
import API from '../../classes/api';

class IncomesList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return <div>
      <div className="h5 h5_left">{this.props.title}</div>
      <div className="table-responsive">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              {this.props.list.map((item, index) =>
                <div key={'p' + index} className="col-xs-2">
                  <div className="th">за {item.period} месяцев</div>
                </div>
              )}
            </div>
            <div className="row">
              {this.props.list.map((item, index) =>
                <div key={'p' + index} className="col-xs-2">
                  <div className="td td_lg">{item.incomeOne} %</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
      ;
  }
}

IncomesList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default IncomesList;

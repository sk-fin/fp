import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { langs } from '../../lang/content';

import helper from '../../classes/helper';
import Calculate from '../../classes/calculate';
import API from '../../classes/api';

class FeesList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return <div>
      <div className="h5 h5_left">{this.props.title}</div>
      {this.props.list.map((item, index) =>
        <div key={'p' + index}>
          { item.description.indexOf('•') == -1 &&
          <div className="h6-ttl">{item.description}</div>
          }
          { item.description.indexOf('•') > -1 &&
          <ul className="simple-list">
            {item.description.split('•').map((item, index) =>
              <li key={'p' + index} className="simple-list__item">{item}</li>
            )}
          </ul>
          }
        </div>
      )}
    </div>
      ;
  }
}

FeesList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default FeesList;

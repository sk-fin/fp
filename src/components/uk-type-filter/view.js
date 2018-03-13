import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { langs } from '../../lang/content';

import helper from '../../classes/helper';
import API from '../../classes/api';

class UkTypeFilter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getTypesList();
  }

  getTypesList() {
    if (this.props.list.length == 0) {
      API.getFundStructureTypes().then(data => {
        this.props.dispatchAddUkTypeFilterList(data.listItem);
      });
    }
  }

  render() {
    let props = this.props;
    return <div className="row filters">
      <div className="col-sm-12 col-xs-12">
      { this.props.loaded &&
        <div className="filt-btt-group">
          <a onClick={() => this.props.dispatchSetUkTypeFilter(0)} className={["filt-btt-group__item", this.props.type == '' ? 'filt-btt-group__item_active' : ''].join(' ')}>Все</a>
          {this.props.list.filter(function (item) {
            return props.pifs_types.indexOf(item.code) > -1
          }).map((item, index) =>
            <a onClick={() => this.props.dispatchSetUkTypeFilter(item.code)} className={["filt-btt-group__item", this.props.type == item.code ? 'filt-btt-group__item_active' : ''].join(' ')}>{item.shortName}</a>
          )}
        </div>
      }
      </div>
    </div>
    ;

  }
}

UkTypeFilter.propTypes = {
  pifs_types: PropTypes.array.isRequired,
};

export default UkTypeFilter;

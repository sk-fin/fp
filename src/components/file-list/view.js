import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { langs } from '../../lang/content';

import helper from '../../classes/helper';
import Calculate from '../../classes/calculate';
import API from '../../classes/api';

class FileList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return <div>
      <div className="h5 h5_left">{this.props.title}</div>
      <div className="files2dl">
        {this.props.list.map((item, index) =>
          <Link key={'p' + index} to={item.url} className="files2dl__link files2dl__link_wide">{item.description}</Link>
        )}
      </div>
    </div>
      ;
  }
}

FileList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default FileList;

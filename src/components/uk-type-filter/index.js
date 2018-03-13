import { connect } from 'react-redux';

import UkTypeFilter from './view';

//Экшны
import { setUkTypeFilter, addUkTypeFilterList } from '../../actions/uk-type-filter';

export function mapStateToProps(state) {
  return {
    loaded: state.ukTypeFilter.loaded,
    type: state.ukTypeFilter.type,
    list: state.ukTypeFilter.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetUkTypeFilter: (type) => dispatch(setUkTypeFilter(type)),
    dispatchAddUkTypeFilterList: (arr) => dispatch(addUkTypeFilterList(arr)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UkTypeFilter);
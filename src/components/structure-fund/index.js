import { connect } from 'react-redux';

import CountPrevProcent from './view';

//Экшны
import { loadFundTypes } from '../../actions/api';

export function mapStateToProps(state) {
  return {
    fundTypes: state.api.fundTypes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadFundTypes: (item) => dispatch(loadFundTypes(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountPrevProcent);
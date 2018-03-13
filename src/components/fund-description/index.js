import { connect } from 'react-redux';

import FundDescription from './view';

//Экшны
import { loadCompany, loadingCompany,loadPif } from '../../actions/api';

export function mapStateToProps(state) {
  return {
    pifList: state.api.pifList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPif: (item) => dispatch(loadPif(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FundDescription);
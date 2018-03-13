import { connect } from 'react-redux';

import CalcMoney from './view';

//Экшны
import { loadCompany, loadingCompany } from '../../actions/api';

export function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalcMoney);
import { connect } from 'react-redux';

import IncomesList from './view';

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

export default connect(mapStateToProps, mapDispatchToProps)(IncomesList);
import { connect } from 'react-redux';

import CompanyDescription from './view';

//Экшны
import { loadCompany, loadingCompany } from '../../actions/api';

export function mapStateToProps(state) {
  return {
    companyList: state.api.companyList,
    loadingCompany: state.api.loadingCompany,
    typeFilter: state.ukTypeFilter.type,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCompany: (item) => dispatch(loadCompany(item)),
    onLoadingCompany: (bool) => dispatch(loadingCompany(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDescription);
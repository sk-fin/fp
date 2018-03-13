import { connect } from 'react-redux';

import UkSmallList from './view';

//Экшны
import { loadUkLIst, loadingUkLIst } from '../../actions/api';
import { ukSmallList, ukSmallListMobile } from '../../actions/ukSmallList';

export function mapStateToProps(state) {
  return {
    ukList: state.api.ukList,
    showUkLIst: state.ukSmallList.showUkLIst,
    showUkLIstMobile: state.ukSmallList.showUkLIstMobile,

    loadingUkList: state.api.loadingUkList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUkLIst: (list) => dispatch(loadUkLIst(list)),
    onShowUkLIst: () => dispatch(ukSmallList()),
    onShowUkLIstMobile: () => dispatch(ukSmallListMobile()),

    onLoadUkLIst: (bool) => dispatch(loadingUkLIst(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UkSmallList);
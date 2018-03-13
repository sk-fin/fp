import { connect } from 'react-redux';

import SlickInvite from './view';

//Экшны
import { loadUkLIst, loadingUkLIst } from '../../actions/api';

export function mapStateToProps(state) {
  return {
    settings: state.slickInviteSlider.settings,
    ukList: state.api.ukList,
    loadingUkList: state.api.loadingUkList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUkLIst: (list) => dispatch(loadUkLIst(list)),
    onLoadUkLIst: (bool) => dispatch(loadingUkLIst(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SlickInvite);
import { connect } from 'react-redux';

import FormWriteToUs from './view';

//Экшны

import {
  showPopup
} from '../../actions/popup';

export function mapStateToProps(state) {
  return {
    showForm: state.popup.showPopup,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onShowPopup: (name) => dispatch(showPopup(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormWriteToUs);
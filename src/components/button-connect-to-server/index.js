import { connect } from 'react-redux';

import ButtonConnectToServer from './view';

//Экшны
import {
  showPopup
} from '../../actions/popup';

export function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    onShowPopup: (name) => dispatch(showPopup(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonConnectToServer);
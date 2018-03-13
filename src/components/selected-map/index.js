import { connect } from 'react-redux';

import SelectedMap from './view';

//Экшны
import {
  changeCity
} from '../../actions/contacts-info-map';

export function mapStateToProps(state) {
  return {
    contacts: state.contactsInfoMap.contacts,
    activeCity: state.contactsInfoMap.activeCity,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeCity: (num) => dispatch(changeCity(num)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedMap);
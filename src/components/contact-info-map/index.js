import { connect } from 'react-redux';

import ContactInfoMap from './view';

//Экшны
import {
  changeCity
} from '../../actions/contacts-info-map';

export function mapStateToProps(state) {
  return {
    activeCity: state.contactsInfoMap.activeCity,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeCity: (num) => dispatch(changeCity(num)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoMap);
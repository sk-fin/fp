import { connect } from 'react-redux';

import Accordion from './view';

//Экшны
import {
  showAccordion
} from '../../actions/accordion';

export function mapStateToProps(state) {
  return {
    accordion: state.accordion.accordion
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onOpenAcordion: (str) => dispatch(showAccordion(str)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
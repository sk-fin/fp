import { connect } from 'react-redux';

import SlickAbout from './view';

export function mapStateToProps(state) {
  return {
    settings: state.slickAboutSlider.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SlickAbout);
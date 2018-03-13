import { connect } from 'react-redux';

import CompanyStandarts from './view';

export function mapStateToProps(state) {
  return {
    settings: state.slickInviteSlider.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyStandarts);
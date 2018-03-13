import { connect } from 'react-redux';

import MainHeader from './view';

import {
  showTopMenu,
  onScrollMenu
} from '../../actions/top-menu';

export function mapStateToProps(state) {
  return {
    showMenu: state.topMenu.showMenu,
    scrollMenu: state.topMenu.scrollMenu,
    whiteMenu: state.topMenu.whiteMenu,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onShowTopMenu: () => dispatch(showTopMenu()),
    onScrollMenu: (bool) => dispatch(onScrollMenu(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
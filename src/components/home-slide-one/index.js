import { connect } from 'react-redux';

import HomeSlideOne from './view';

//Экшны
import {
  openLeft,
  openRight,
} from '../../actions/home-header-slider';
import { ukSmallList, ukSmallListMobile } from '../../actions/ukSmallList';

export function mapStateToProps(state) {
  return {
    showLeftBlock: state.homeHeaderSlider.showLeftBlock,
    showRightBlock: state.homeHeaderSlider.showRightBlock,

    showUkLIst: state.ukSmallList.showUkLIst,
    showUkLIstMobile: state.ukSmallList.showUkLIstMobile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onOpenLeft: () => dispatch(openLeft(true)),
    onCloseLeft: () => dispatch(openLeft(false)),
    onOpenRight: () => dispatch(openRight(true)),
    onCloseRight: () => dispatch(openRight(false)),
    onShowUkLIst: () => dispatch(ukSmallList()),
    onShowUkLIstMobile: () => dispatch(ukSmallListMobile()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSlideOne);
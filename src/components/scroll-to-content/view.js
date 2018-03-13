import React, { PropTypes, Component } from 'react';

import { ScrollTo, ScrollArea } from "react-scroll-to";

class ScrollToContent extends Component {
  render() {
    return <ScrollTo>
      {
        (scroll, scrollById) => (
          <a onClick={() => scroll(0, document.getElementById(this.props.el).offsetTop + this.props.offset)} className="scroll-round"/>
        )
      }
    </ScrollTo>;
  }
}

ScrollToContent.propTypes = {
  //future
  // document.getElementById('future').scrollTop
  el: PropTypes.string.isRequired,
  offset: PropTypes.number,
};


export default ScrollToContent;

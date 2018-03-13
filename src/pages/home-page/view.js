import React, { PropTypes, Component } from 'react';

import './style.scss';

import HomeSlideOne from "../../components/home-slide-one";
import HomeSlideDue from "../../components/home-slide-due";
import HomeSlideTre from "../../components/home-slide-tre";
import MainHeader from "../../components/main-header";

import FormConnectToServer from '../../components/form-connect-to-server';
import helper from '../../classes/helper';

window.$ = window.jQuery = require('jquery');
require('../../assets/js/scrolloverflow');
require('fullpage.js');

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.onScrollMenu(false);
    helper.setTitle();
  }

  componentDidMount() {
    let props = this.props;
    /*
    $(document).ready(function() {
      if ($('#fullpage').length && window.innerWidth >= 992) {
        $('#fullpage').fullpage({
          lockAnchors: false,
          anchors: ['section1', 'section2', 'section3'],
          navigation: true,
          navigationPosition: 'right',
          scrollingSpeed: 700,
          fitToSection: false,
          easing: 'easeInOutCubic',
          easingcss3: 'ease',
          scrollOverflow: true,
          scrollOverflowReset: false,
          keyboardScrolling: true,
          animateAnchor: true,
          recordHistory: true,
          verticalCentered: false,
          paddingBottom: '',
          sectionSelector: '.section',
          lazyLoading: false,
          onLeave: function (index, nextIndex, direction) {
            if (nextIndex == 1) {
              props.onScrollMenu(false);
            } else {
              props.onScrollMenu(true);
            }
          }
        });
      }
    });
    */
  }



  render() {

    return (
      <div>
        <MainHeader/>
        <div id="fullpage">
          <div className="section first-section">
            <HomeSlideOne/>
          </div>
          <div className="section">
            <HomeSlideDue/>
          </div>
          <div className="section contacts-block">
            <HomeSlideTre/>
          </div>
        </div>
        <FormConnectToServer/>
      </div>
    )

  }

}

HomePage.propTypes = {

};

export default HomePage;

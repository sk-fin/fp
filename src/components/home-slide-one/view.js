import React, { PropTypes } from 'react';

import ScrollToContent from '../scroll-to-content';
import UkSmallList from '../uk-small-list';
import ButtonConnectToServer from '../button-connect-to-server';

import { langs } from '../../lang/content';

const HomeSlideOne = (state, { onOpenLeft }) =>
    <ul id="up-this-slider">
      <li>
        <section className="home" id="home">
          <div className="container">
            <div className="home-flex">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="big-title big-title_deco white">
                    {langs.h1OneBlock}
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 hidden-sm hidden-xs">
                  <div className="main-screen-wrapper">
                    <img src="./src/assets/img/overlay-l.png" className="hide-0" alt=""/>
                    <div id="for-uk"
                         className={["for-uk", state.showLeftBlock ? 'adv-active' : ''].join(' ')}
                         onMouseEnter={state.onOpenLeft}
                         onMouseLeave={state.onCloseLeft}
                    >
                      <h4 className="h4">{langs.ukService.title}</h4>
                      <ul className="for-list">
                        {langs.ukService.list.map((item, index) =>
                          <li key={'for-list-' + index} className="for-list__item">{item}</li>
                        )}
                      </ul>
                      <ButtonConnectToServer buttomName={langs.buttons.connect} buttomClass={'button button_inline button_hide popup-connect'}/>
                      <a href="#" className="button-action button button_inline button_transparent">{langs.buttons.more}</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 hidden-sm hidden-xs">
                  <div className="main-screen-wrapper">

                    <div className={["main-screen-toggle", state.showUkLIst ? 'hidden' : ''].join(' ')}>
                      <img src="./src/assets/img/overlay-r.png" className="hide-0" alt=""/>
                      <div id="for-inv"
                           className={["for-inv", state.showRightBlock ? 'adv-active' : ''].join(' ')}
                           onMouseEnter={ state.onOpenRight }
                           onMouseLeave={ !state.showUkLIst ? state.onCloseRight : null}
                      >
                        <h4 className="h4">{langs.invService.title}</h4>
                        <ul className="for-list">
                          {langs.invService.list.map((item, index) =>
                            <li key={'for-list-' + index} className="for-list__item">{item}</li>
                          )}
                        </ul>
                        <a href="#" className="button-action button button_inline button_hidden">{langs.buttons.more}</a>
                        <ButtonConnectToServer buttomName={langs.buttons.connect} buttomClass={'button button_inline button_hide popup-connect'}/>
                        <div onClick={() => state.onShowUkLIst()} className="screen-toggle button button_inline button_transparent button_hide">{langs.buttons.selectPif}</div>
                      </div>
                    </div>

                    <UkSmallList/>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={["overlay-l", state.showLeftBlock ? 'overlay-l_show' : '', state.showRightBlock ? 'overlay-l_dark' : '' ].join(' ')}></div>
          <div className={["overlay-r", state.showLeftBlock ? 'overlay-r_dark' : '', state.showRightBlock ? 'overlay-r_show' : '' ].join(' ')}></div>

          <ScrollToContent el={'future'} offset={-120}/>
        </section>
      </li>
      <li className='hidden-lg hidden-md'>
        <div className="overlay-l-sm">
          <h4 className="h4">{langs.ukService.title}</h4>
          <ul className="for-list for-list_slide">
            {langs.ukService.list.map((item, index) =>
              <li key={'for-list-' + index} className="for-list__item">{item}</li>
            )}
          </ul>
          <div>
            <ButtonConnectToServer buttomName={langs.buttons.connect} buttomClass={'button button_inline popup-connect'}/>
            <a href="#" className="button-action button button_inline button_transparent">{langs.buttons.more}</a>
          </div>
        </div>
      </li>
      <li className='hidden-lg hidden-md'>
        <div className="overlay-r-sm">

          <div className={["main-screen-toggle", state.showUkLIstMobile ? 'hidden' : ''].join(' ')}>
            <h4 className="h4">{langs.invService.title}</h4>
            <ul className="for-list for-list_slide">
              {langs.invService.list.map((item, index) =>
                <li key={'for-list-' + index} className="for-list__item">{item}</li>
              )}
            </ul>
            <div>
              <ButtonConnectToServer buttomName={langs.buttons.connect} buttomClass={'button popup-connect'}/>
              <div onClick={() => state.onShowUkLIstMobile()}
                   className="screen-toggle button button_transparent">{langs.buttons.selectPif}</div>
            </div>
          </div>

          <UkSmallList/>


        </div>
      </li>
    </ul>;

HomeSlideOne.propTypes = {

};

export default HomeSlideOne;

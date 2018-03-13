import React, { PropTypes } from 'react';

import { langs } from '../../lang/content';
import ButtonConnectToServer from '../../components/button-connect-to-server';

const HomeSlideDue = ({  }) =>
  <section className="future" id="future">
    <div className="container">
      <div className="future-flex">
        <div className="row">
          <div className="col-md-12">
            <h2 className="big-title big-title_deco big-title_narrow">
              {langs.h1DueBlock}
            </h2>
            <p className="simple-text simple-text_center">
              {langs.p1DueBlock} <a href="" className="learn-more">{langs.buttons.more}</a>
            </p>
          </div>
        </div>
        <div className="row">
          {langs.futureIconBlock.map((item, index) =>
            <div key={'vantage-' + index} className="col-sm-4">
              <div className="vantage">
                <div className={['vantage__icon', item.iconClass].join(' ')}></div>
                <div className="vantage__text">
                  {item.title}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-md-12">
            <ButtonConnectToServer buttomName={langs.buttons.connect} buttomClass={'button popup-connect'}/>
          </div>
        </div>
      </div>
    </div>

  </section>;

HomeSlideDue.propTypes = {

};

export default HomeSlideDue;

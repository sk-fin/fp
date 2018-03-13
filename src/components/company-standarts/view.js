import React, { PropTypes, Component } from 'react';
import Slider from 'react-slick';

//Контейнер
import grayBlockWithTitle from "../../containers/gray-block-with-title";
import ButtonConnectToServer from "../../components/button-connect-to-server";

import { langs } from '../../lang/content';

const CompanyStandarts = (state, {  }) =>
<div>
    <div className="row">
        {langs.companyStandart.map((item, index) =>
          <div key={'v'+ index} className="col-sm-4">
              <div className={'high-st'}>
                  <div className={['high-st__ico', 'high-st__ico_' + index].join(' ')}></div>
                  <div className="high-st__title">{item.title}</div>
                  <div className="high-st__text">{item.description}</div>
              </div>
          </div>
        )}
    </div>
    <div className="row">
        <div className="col-md-12">
            <ButtonConnectToServer buttomName={langs.buttons.client} buttomClass={'button popup-connect'}/>
        </div>
    </div>
</div>;

CompanyStandarts.propTypes = {

};

export default grayBlockWithTitle(CompanyStandarts, 'ВЫСОКИЕ СТАНДАРТЫ И ЯСНЫЕ ПРИОРИТЕТЫ', 'standards');

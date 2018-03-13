import React, { PropTypes, Component } from 'react';

import helper from '../../classes/helper';

import { langs } from '../../lang/content';

const SelectedMap = (state, { }) =>
      <div className="info-map">
        {langs.contacts.data.map((city, index) =>
          <div key={'map-' + index} className={'map map_' + index + ' toggle-info'}></div>
        )}
        <div id="map" className='map map_contacts toggle-info'></div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="button-group">
                {langs.contacts.data.map((city, index) =>
                  <a key={'bt-' + index}
                    onClick={() => state.onChangeCity(index)}
                    className={["button-group__item", state.activeCity == index ? 'button-group__item_active' : ''].join(' ')}
                  >{city.name}</a>
                )}
              </div>
              <h2 className="big-title">{state.title}</h2>
            </div>
          </div>
        </div>
      </div>
  ;

SelectedMap.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SelectedMap;

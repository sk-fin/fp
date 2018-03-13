import React, { PropTypes, Component } from 'react';
import Slider from 'react-slick';

import { langs } from '../../lang/content';

const SlickAbout = (state, {  }) =>
    <Slider {...state.settings}>
      {langs.slickAbout.map((item, index) =>
        <div key={'v'+ index} className="about-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="title title_thin title_deco white">{item.title}</h2>
                        <p className="simple-text white simple-text_narrow">{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
      )}
    </Slider>;

SlickAbout.propTypes = {

};

export default SlickAbout;

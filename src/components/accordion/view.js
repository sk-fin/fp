import React, { PropTypes, Component } from 'react';

import { langs } from '../../lang/content';
import helper from '../../classes/helper';

import HtmlParser from 'html-react-parser';

const Accordion = (state, { }) =>
  <div className="a-group">
    {state.data.map((item, index) =>
      <div key={'v' + index} className={['a-group-item', state.accordion == 'v' + index ? 'a-group-item_active' : ''].join(' ')}>
        <div className="a-group-toggle" onClick={() => state.onOpenAcordion('v' + index)}>
          <span>{langs.buttons.more}</span>
          <span>{langs.buttons.collapse}</span>
        </div>
        <h5 className="h5">{item.header}</h5>
        <div className="a-group-text">{HtmlParser(item.content)}</div>
      </div>
    )}
  </div>
  ;

Accordion.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Accordion;

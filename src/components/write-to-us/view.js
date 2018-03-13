import React, { PropTypes, Component } from 'react';

import FormWriteToUs from '../form-write-to-us';

const WriteToUs = (state, { }) =>
    <div>

      <a onClick={() => state.onShowPopup('write-us')} className="button">{state.buttomName}</a>

      <FormWriteToUs/>

    </div>
  ;

WriteToUs.propTypes = {
  buttomName: PropTypes.string.isRequired,
};

export default WriteToUs;

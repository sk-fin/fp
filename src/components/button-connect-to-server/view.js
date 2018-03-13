import React, { PropTypes, Component } from 'react';

const ButtonConnectToServer = (state, { }) =>
    <a onClick={() => state.onShowPopup('popup-connect')} className={["button", state.buttomClass ].join(' ')}>{state.buttomName}</a>;

ButtonConnectToServer.propTypes = {
  buttomName: PropTypes.string.isRequired,
  buttomClass: PropTypes.string,
};

export default ButtonConnectToServer;

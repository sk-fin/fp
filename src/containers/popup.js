import React from 'react';

import '../assets/css/popup.scss';

function popupContainer(Component, classNames, formName) {
  return class PopupContainer extends React.Component {
    render() {
      return <div className={["popup-wrap", classNames, formName == this.props.showForm ? '' : 'hidden'].join(' ')}>
          <div onClick={() => this.props.onShowPopup('')} className="popup-bg"/>
          <div className="popup">
            <div onClick={() => this.props.onShowPopup('')} className="popup-close"/>
            <div className="popup-content">
              <Component {...this.props}/>
            </div>
          </div>
        </div>;
    }
  }
}

export default popupContainer;


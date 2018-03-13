import React from 'react';

function bsFullsizeContainer(Component, classNames) {
  return class BsFullsizeContainer extends React.Component {
    render() {
      return <div className="container">
          <div className="row">
            <div className="{classNames}">
              <Component {...this.props}/>
            </div>
          </div>
        </div>;
    }
  }
}

export default BsFullsizeContainer;


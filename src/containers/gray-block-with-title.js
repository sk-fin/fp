import React from 'react';

function grayBlockWithTitle(Component, title = '', className = '') {
  return class GrayBlockWithTitle extends React.Component {
    render() {
      return <section className={className}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="title title_deco">{title}</h3>
                <Component {...this.props}/>
              </div>
            </div>
          </div>
        </section>;
    }
  }
}

export default grayBlockWithTitle;


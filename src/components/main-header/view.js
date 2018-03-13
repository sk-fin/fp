import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import helper from '../../classes/helper';
import ButtonConnectToServer from '../button-connect-to-server';
import { langs } from '../../lang/content';

class MainHeader extends Component {
  constructor(props) {
    super(props);

  }

  _handleScroll() {
    document.documentElement.scrollTop > 1 ? this.props.onScrollMenu(true) : this.props.onScrollMenu(false)
  }

  componentDidMount() {
    window.onscroll = () => this._handleScroll()
  }

  render() {
    return <div className="header-wrapper">
      <header className={["header", this.props.showMenu ? 'header_active' : 'header_no_active', this.props.scrollMenu ? 'header_active-scroll' : ''].join(' ')}>

        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3 col-xs-4">
              <a href="/">
                <div className="logo"></div>
              </a>
            </div>
            <div className="col-md-6 col-sm-5 col-xs-8">
              <div onClick={() => this.props.onShowTopMenu()} className="menu-button">
                <span className="menu-button__icon"/><span>меню</span>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <ul className="log-reg">
                <li className="log-reg__item log-reg__item_log">
                  <a href={langs.links.entry.url}>
                    {langs.links.entry.title}
                  </a>
                </li>
                <li className="log-reg__item log-reg__item_reg">
                  <a href={langs.links.registry.url}>
                    {langs.links.registry.title}
                  </a>
                </li>
              </ul>
              <div className="header-phn">
                <a href={"tel:" + helper.onlyNumbers(langs.contacts.data[0].phones[0])}
                   className="header-phn__item">{langs.contacts.data[0].phones[0]}</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={["header-hide", this.props.showMenu ? 'header-hide_show' : ''].join(' ')}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-9">
              <nav className="page-nav">
                {langs.navigation.map((item, index) =>
                  <Link key={'pg-nav-' + index} to={item.url} onClick={() => this.props.onShowTopMenu()} className="page-nav__item" activeClassName="active">{item.title}</Link>
                )}
              </nav>
            </div>
            <div className="col-md-2 col-sm-3">
              <ButtonConnectToServer buttomName={langs.buttons.connect} buttomClass={'button popup-connect'}/>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

MainHeader.propTypes = {

};


export default MainHeader;

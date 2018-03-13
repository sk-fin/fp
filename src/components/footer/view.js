import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { langs } from '../../lang/content';

const Footer = (state, { }) =>
    <div>
      <section className="bottom-nav">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-xs-12">
              <nav className="page-nav">
                {langs.navigation.map((item, index) =>
                  <Link key={'pg-nav-' + index} to={item.url} className="page-nav__item page-nav__item_bottom" activeClassName="active">{item.title}</Link>
                )}
              </nav>
            </div>
            <div className="col-sm-4 col-xs-12">
              <form className="form-search">
                <input type="text" className="form-search__input"/>
                <button className="form-search__button"><span className="search-icon"/></button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="footer-list">
                <li className="footer-list__item">
                  <span className="gray-line">{langs.copy}</span>
                </li>
                {langs.policy.map((item, index) =>
                  <li key={'footer-list-' + index} className="footer-list__item">
                    <a href={item.url} className="red-link">{item.title}</a>
                  </li>
                )}
                <li className="footer-list__item">
								<span className="gray-line">
									Разработка сайта — <a target="_blank" href="https://fleeks.ru">
                    <img src="./src/assets/img/fleeks-logo.png" alt=""/>
                  </a>
								</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  ;

Footer.propTypes = {

};

export default Footer;

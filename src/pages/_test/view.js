import React, { PropTypes, Component } from 'react';

import './style.scss';
import {SectionsContainer, Section} from 'react-fullpage';
import { Scrollbars } from 'react-custom-scrollbars';

//import '../../classes/jquery-loader';

window.$ = window.jQuery = require('jquery');
require('fullpage.js');
require('jquery-slimscroll');

class Test extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    $(document).ready(function() {
      if ($('#fullpage').length && window.innerWidth >= 992) {
        $('#fullpage').fullpage({
          menu: '#menu',
          lockAnchors: false,
          anchors: ['section1', 'section2', 'section3'],
          navigation: true,
          navigationPosition: 'right',
          scrollingSpeed: 700,
          fitToSection: false,
          easing: 'easeInOutCubic',
          easingcss3: 'ease',
          scrollOverflow: true,
          scrollOverflowReset: false,
          fixedElements: '.header-wrapper',
          keyboardScrolling: true,
          animateAnchor: true,
          recordHistory: true,
          verticalCentered: false,
          paddingBottom: '',
          sectionSelector: '.section',
          lazyLoading: false,
        });
      }

    });
  }

  render() {

    return (
      <div>
        <div className="header-wrapper">
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="col-md-2 col-sm-3 col-xs-4">
                  <a href="/">
                    <div className="logo"></div>
                  </a>
                </div>
                <div className="col-md-6 col-sm-5 col-xs-8">
                  <div className="menu-button">
                    <span className="menu-button__icon"/><span>меню</span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <ul className="log-reg">
                    <li className="log-reg__item log-reg__item_log">
                      <a href="#">
                        Вход
                      </a>
                    </li>
                    <li className="log-reg__item log-reg__item_reg">
                      <a href="#">
                        Регистрация
                      </a>
                    </li>
                  </ul>
                  <div className="header-phn">
                    <a href="tel:+74956633578" className="header-phn__item">+7 (495) <span className='bold'>663-35-78</span></a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="header-hide">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-sm-9">
                  <nav className="page-nav">
                    <a href="#" className="page-nav__item">О проекте</a>
                    <a href="#" className="page-nav__item">Сервис для УК</a>
                    <a href="#" className="page-nav__item">Сервис для инвесторов</a>
                    <a href="#" className="page-nav__item">Контакты</a>
                  </nav>
                </div>
                <div className="col-md-2 col-sm-3">
                  <a href="#popup-connect" className="button popup-connect">Подключиться</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="fullpage">
          <div className="section first-section">
            <ul id="up-this-slider">
              <li>
                <section className="home" id="home">
                  <div className="container">
                    <div className="home-flex">
                      <div className="row">
                        <div className="col-md-12">
                          <h1 className="big-title big-title_deco white">
                            Финансовая платформа — Новое слово в ПИФ
                          </h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 hidden-sm hidden-xs">
                          <div className="main-screen-wrapper">
                            <img src="img/overlay-l.png" className="hide-0" alt=""/>
                            <div id="for-uk" className="for-uk">
                              <h4 className="h4">Сервис для УК</h4>
                              <ul className="for-list">
                                <li className="for-list__item">Широкий выбор инвестиционных стратегий;</li>
                                <li className="for-list__item">Индивидуальный подход к клиентам;</li>
                                <li className="for-list__item">Управление Активами в личном кабинете.</li>
                              </ul>
                              <a href="#popup-connect" className="button button_inline button_hide popup-connect">Подключиться</a>
                              <a href="#for-uk" className="button-action button button_inline button_transparent">Подробнее</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 hidden-sm hidden-xs">
                          <div className="main-screen-wrapper">
                            <div className="main-screen-toggle">
                              <img src="img/overlay-r.png" className="hide-0" alt=""/>
                              <div id="for-inv" className="for-inv">
                                <h4 className="h4">Сервис для Инвесторов</h4>
                                <ul className="for-list">
                                  <li className="for-list__item">Широкий выбор инвестиционных стратегий;</li>
                                  <li className="for-list__item">Индивидуальный подход к клиентам;</li>
                                  <li className="for-list__item">Управление Активами в личном кабинете.</li>
                                </ul>
                                <a href="#for-inv" className="button-action button button_inline button_hidden">Подробнее</a>
                                <a href="#popup-connect" className="button button_inline button_hide popup-connect">Подключиться</a>
                                <div className="screen-toggle button button_inline button_transparent button_hide">Выбрать ПИФ</div>
                              </div>
                            </div>
                            <div className="main-screen-toggle hidden">
                              <div className="list-uk-wrapper">
                                <div className="list-uk-close screen-toggle">Закрыть</div>
                                <div className="list-uk-title">Выберите УК</div>
                                <ul className="list-uk">
                                  <li className="list-uk__item">
                                    <a href="">Альфа Капитал</a>
                                  </li>
                                  <li className="list-uk__item">
                                    <a href="">Аз-Капитал</a>
                                  </li>
                                  <li className="list-uk__item">
                                    <a href="">АктивФинансМенеджмент</a>
                                  </li>
                                  <li className="list-uk__item">
                                    <a href="">Норд-Вест Капитал</a>
                                  </li>
                                  <li className="list-uk__item">
                                    <a href="">Сбербанк Управление Активами</a>
                                  </li>
                                  <li className="list-uk__item">
                                    <a href="">Тинькофф Инвестиции</a>
                                  </li>
                                  <li className="list-uk__item">
                                    <a href="">Альфа Капитал</a>
                                  </li>
                                  <li className="list-uk__item">
                                    <a href="">Аз-Капитал</a>
                                  </li>
                                  <li className="list-uk__item">
                                    <a href="">АктивФинансМенеджмент</a>
                                  </li>
                                  <li className="list-uk__item">
                                    <a href="">Норд-Вест Капитал</a>
                                  </li>
                                  <li className="list-uk__item">
                                    <a href="">Сбербанк Управление Активами</a>
                                  </li>
                                  <li className="list-uk__item">
                                    <a href="">Тинькофф Инвестиции</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlay-l"></div>
                  <div className="overlay-r"></div>
                  <a href="#section2" className="scroll-round"/>
                </section>
              </li>
              <li className='hidden-lg hidden-md'>
                <div className="overlay-l-sm">
                  <h4 className="h4">Сервис для УК</h4>
                  <ul className="for-list for-list_slide">
                    <li className="for-list__item">Широкий выбор инвестиционных стратегий;</li>
                    <li className="for-list__item">Индивидуальный подход к клиентам;</li>
                    <li className="for-list__item">Управление Активами в личном кабинете.</li>
                  </ul>
                  <div>
                    <a href="#popup-connect" className="button button_inline popup-connect">Подключиться</a>
                    <a href="#for-uk" className="button-action button button_inline button_transparent">Подробнее</a>
                  </div>
                </div>
              </li>
              <li className='hidden-lg hidden-md'>
                <div className="overlay-r-sm">
                  <div className="main-screen-toggle">
                    <h4 className="h4">Сервис для Инвесторов</h4>
                    <ul className="for-list for-list_slide">
                      <li className="for-list__item">Широкий выбор инвестиционных стратегий;</li>
                      <li className="for-list__item">Индивидуальный подход к клиентам;</li>
                      <li className="for-list__item">Управление Активами в личном кабинете.</li>
                    </ul>
                    <div>
                      <a href="#popup-connect" className="button popup-connect">Подключиться</a>
                      <div className="screen-toggle button button_transparent">Выбрать ПИФ</div>
                    </div>
                  </div>
                  <div className="main-screen-toggle hidden">
                    <div className="list-uk-wrapper list-uk-wrapper_slide">
                      <div className="list-uk-close screen-toggle">Закрыть</div>
                      <div className="list-uk-title">Выберите УК</div>
                      <ul className="list-uk">
                        <li className="list-uk__item">
                          <a href="">Альфа Капитал</a>
                        </li>
                        <li className="list-uk__item">
                          <a href="">Аз-Капитал</a>
                        </li>
                        <li className="list-uk__item">
                          <a href="">АктивФинансМенеджмент</a>
                        </li>
                        <li className="list-uk__item">
                          <a href="">Норд-Вест Капитал</a>
                        </li>
                        <li className="list-uk__item">
                          <a href="">Сбербанк Управление Активами</a>
                        </li>
                        <li className="list-uk__item">
                          <a href="">Тинькофф Инвестиции</a>
                        </li>
                        <li className="list-uk__item">
                          <a href="">Альфа Капитал</a>
                        </li>
                        <li className="list-uk__item">
                          <a href="">Аз-Капитал</a>
                        </li>
                        <li className="list-uk__item">
                          <a href="">АктивФинансМенеджмент</a>
                        </li>
                        <li className="list-uk__item">
                          <a href="">Норд-Вест Капитал</a>
                        </li>
                        <li className="list-uk__item">
                          <a href="">Сбербанк Управление Активами</a>
                        </li>
                        <li className="list-uk__item">
                          <a href="">Тинькофф Инвестиции</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="section">
            <section className="future" id="future">
              <div className="container">
                <div className="future-flex">
                  <div className="row">
                    <div className="col-md-12">
                      <h2 className="big-title big-title_deco big-title_narrow">
                        Будущее начинается здесь!
                      </h2>
                      <p className="simple-text simple-text_center">
                        Паевой инвестиционный фонд — это форма коллективных инвестиций, при которой средства инвесторов объединяются для дальнейшего размещения профессиональными управляющими в ценные бумаги (или иные активы) с целью получения дохода. Если проще — это общий инвестиционный «котел», в который «скидываются» инвесторы. Деньгами из этого общего «котла» управляют профессионалы финансовых рынков. Они принимают решения: когда и что на деньги инвесторов покупать, а когда — продавать. <a href="" className="learn-more">Подробнее</a>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="vantage">
                        <div className="vantage__icon vantage__icon_1"></div>
                        <div className="vantage__text">
                          Инвестиции в российский и зарубежные рынки
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="vantage">
                        <div className="vantage__icon vantage__icon_2"></div>
                        <div className="vantage__text">
                          Онлайн-покупка за две минуты
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="vantage">
                        <div className="vantage__icon vantage__icon_3"></div>
                        <div className="vantage__text">
                          100% контроль инвестиций в Личном кабинете
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <a href="#popup-connect" className="button popup-connect">Подключиться</a>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#section3" className="scroll-round"/>
            </section>
          </div>
          <div className="section">
            <section className="contacts" id="contacts">
              <div className="info-map">
                <div className='map map_1 toggle-info'></div>
                <div className='map map_2 toggle-info hidden'></div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="button-group">
                        <a href="" className="button-group__item button-group__item_active">москва</a>
                        <a href="" className="button-group__item">санкт-петербург</a>
                      </div>
                      <h2 className="big-title">Контактная информация</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="info">
                      <div className="info__adress">
                        <div className="toggle-info">
                          115162, Россия, Москва, ул. Шаболовка, 31Б, подъезд 3, этаж 5, вход с Конного переулка
                        </div>
                        <div className="toggle-info hidden">
                          115162, Россия, Санкт-Петербург, ул. Шаболовка, 31Б, подъезд 3, этаж 5, вход с Конного переулка
                        </div>
                      </div>
                      <div className="info-tel info-tel_l">
                        <span className="info-label">Телефон</span>
                        <ul className="info-list toggle-info">
                          <li className="info-list__item"><a href="tel:+84956443770"><span className="gray">8 495</span> 644 37 70</a></li>
                          <li className="info-list__item"><a href="tel:+84956633578"><span className="gray">8 495</span> 663 35 78</a></li>
                        </ul>
                        <ul className="info-list toggle-info hidden">
                          <li className="info-list__item"><a href="tel:+84956443780"><span className="gray">8 495</span> 644 37 80</a></li>
                          <li className="info-list__item"><a href="tel:+84956633588"><span className="gray">8 495</span> 663 35 88</a></li>
                        </ul>
                      </div>
                      <span className="tel-icon"/>
                      <div className="info-tel info-tel_r">
                        <span className="info-label">Факс</span>
                        <ul className="info-list toggle-info">
                          <li className="info-list__item"><span className="gray">8 495</span> 644 37 71</li>
                          <li className="info-list__item"><a className="tdu" href="mailto:fp@mail.ru">fp@mail.ru</a></li>
                        </ul>
                        <ul className="info-list toggle-info hidden">
                          <li className="info-list__item"><span className="gray">8 495</span> 644 37 81</li>
                          <li className="info-list__item"><a className="tdu" href="mailto:fp@mail.ru">fp@mail.ru</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <a href="#form-fb" className="button popup-link">Написать нам</a>
                  </div>
                </div>
              </div>
            </section>
            <section className="slider">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="title title_deco">к нам уже присоединились</h3>
                    <ul id="lightslider">
                      <li><a href=''><img src="img/logos/1.png" alt=""/></a></li>
                      <li><a href=''><img src="img/logos/2.png" alt=""/></a></li>
                      <li><a href=''><img src="img/logos/3.png" alt=""/></a></li>
                      <li><a href=''><img src="img/logos/4.png" alt=""/></a></li>
                      <li><a href=''><img src="img/logos/5.png" alt=""/></a></li>
                      <li><a href=''><img src="img/logos/1.png" alt=""/></a></li>
                      <li><a href=''><img src="img/logos/2.png" alt=""/></a></li>
                      <li><a href=''><img src="img/logos/3.png" alt=""/></a></li>
                      <li><a href=''><img src="img/logos/4.png" alt=""/></a></li>
                      <li><a href=''><img src="img/logos/5.png" alt=""/></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <div className="bottom-nav">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-xs-12">
                    <nav className="page-nav">
                      <a href="#" className="page-nav__item page-nav__item_bottom">Главная</a>
                      <a href="#" className="page-nav__item page-nav__item_bottom">Сервис для УК</a>
                      <a href="#" className="page-nav__item page-nav__item_bottom">Сервис для инвесторов</a>
                      <a href="#" className="page-nav__item page-nav__item_bottom">Контакты</a>
                    </nav>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <form className="form-search">
                      <input type="text" className="form-search__input"/>
                      <button className="form-search__button">
                        <span className="search-icon"/>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="footer-list">
                      <li className="footer-list__item">
                        <span className="gray-line">© 2017. Все права защищены.</span>
                      </li>
                      <li className="footer-list__item">
                        <a href="#" className="red-link">Политика обработки персональных данных</a>
                      </li>
                      <li className="footer-list__item">
                        <a href="#" className="red-link">Политика конфиденциальности</a>
                      </li>
                      <li className="footer-list__item">
								<span className="gray-line">
									Дизайн сайта — <a href="http://fleeks.ru"><img src="img/fleeks-logo.png" alt=""/></a>
								</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div className="hidden">
          <form className="form-fb" id="form-fb">
            <div className="form-fb-wrapper">
              <div className="row">
                <div className="col-md-12">
                  <span className="form-fb__title">обратная связь</span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <input type="text" className="form-fb__input" placeholder="Ваше имя *" required/>
                </div>
                <div className="col-sm-6">
                  <input type="text" className="form-fb__input" placeholder="Ваш e-mail *" required/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <textarea className="form-fb__textarea" placeholder="Сообщение *" required/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8">
                  <span className="form-fb__desc">Поля, обязательные для заполнения, отмечены звездочкой <span className="red">*</span></span>
                </div>
                <div className="col-sm-4">
                  <button className="form-fb__button button">Отправить</button>
                </div>
              </div>
            </div>
          </form>
          <form className="form-fb form-fb_transparent" id="popup-connect">
            <div className="form-fb-wrapper">
              <div className="row">
                <div className="col-md-12">
                  <div className="big-title big-title_deco white">Подключиться к сервису</div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <input type="text" className="form-fb__input" placeholder="Ваше имя *" required/>
                </div>
                <div className="col-sm-6">
                  <input type="text" className="form-fb__input" placeholder="Ваш e-mail *" required/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <textarea className="form-fb__textarea" placeholder="Сообщение *" required/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8">
                  <span className="form-fb__desc white">Поля, обязательные для заполнения, отмечены звездочкой <span className="red">*</span></span>
                </div>
                <div className="col-sm-4">
                  <button className="form-fb__button button">Отправить</button>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
    )

  }
}

Test.propTypes = {

};

export default Test;

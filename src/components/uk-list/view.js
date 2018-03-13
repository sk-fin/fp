import React, { PropTypes, Component } from 'react';



import { langs } from '../../lang/content';
import helper from '../../classes/helper';

import HtmlParser from 'html-react-parser';


class UkList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return <div className="card-wrapper">
      <section className="cards">
        <div className="container">
          <div className="filters">
            <div className="row">
              <div className="col-sm-9 col-xs-12">
                <div className="filt-btt-group">
                  <a href="" className="filt-btt-group__item filt-btt-group__item_active">все</a>
                  <a href="" className="filt-btt-group__item">пифы акций</a>
                  <a href="" className="filt-btt-group__item">пифы облигаций</a>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12">
                <select className="filters-select">
                  <option value="">В любой валюте</option>
                  <option value="">В любой валюте</option>
                  <option value="">В любой валюте</option>
                  <option value="">В любой валюте</option>
                  <option value="">В любой валюте</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card__title">ОПИФ «Альфа-Капитал Стратегические инвестиции»</div>
                <a href="servicein.html" className="card__details">подробнее</a>
                <p className="card__desc">Рублевый облигационный фонд, основу портфеля которого составляют корпоративные рублевые облигации первого и второго эшелонов. Тактически в фонд могут включаться длинные облигации федерального займа. В фонде делается ставка на рост российского долгового рынка.</p>
                <div className="row">
                  <div className="col-sm-8 col-xs-12">
                    <table className="table table_small">
                      <tr>
                        <th>стоимость СЧА</th>
                        <th>ДОХОДНОСТЬ за год</th>
                      </tr>
                      <tr>
                        <td>6294 млн. ₽</td>
                        <td className='green'>33%</td>
                      </tr>
                    </table>

                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <a href="#form-fb" className="card__button popup-link">Купить онлайн</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card__title">ОПИФ «Альфа-Капитал Стратегические инвестиции»</div>
                <a href="servicein.html" className="card__details">подробнее</a>
                <p className="card__desc">Рублевый облигационный фонд, основу портфеля которого составляют корпоративные рублевые облигации первого и второго эшелонов. Тактически в фонд могут включаться длинные облигации федерального займа. В фонде делается ставка на рост российского долгового рынка.</p>
                <div className="row">
                  <div className="col-sm-8 col-xs-12">
                    <table className="table table_small">
                      <tr>
                        <th>стоимость СЧА</th>
                        <th>ДОХОДНОСТЬ за год</th>
                      </tr>
                      <tr>
                        <td>6294 млн. ₽</td>
                        <td className='green'>33%</td>
                      </tr>
                    </table>

                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <a href="#form-fb" className="card__button popup-link">Купить онлайн</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card__title">ОПИФ «Альфа-Капитал Стратегические инвестиции»</div>
                <a href="servicein.html" className="card__details">подробнее</a>
                <p className="card__desc">Рублевый облигационный фонд, основу портфеля которого составляют корпоративные рублевые облигации первого и второго эшелонов. Тактически в фонд могут включаться длинные облигации федерального займа. В фонде делается ставка на рост российского долгового рынка.</p>
                <div className="row">
                  <div className="col-sm-8 col-xs-12">
                    <table className="table table_small">
                      <tr>
                        <th>стоимость СЧА</th>
                        <th>ДОХОДНОСТЬ за год</th>
                      </tr>
                      <tr>
                        <td>6294 млн. ₽</td>
                        <td className='green'>33%</td>
                      </tr>
                    </table>

                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <a href="#form-fb" className="card__button popup-link">Купить онлайн</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card__title">ОПИФ «Альфа-Капитал Стратегические инвестиции»</div>
                <a href="servicein.html" className="card__details">подробнее</a>
                <p className="card__desc">Рублевый облигационный фонд, основу портфеля которого составляют корпоративные рублевые облигации первого и второго эшелонов. Тактически в фонд могут включаться длинные облигации федерального займа. В фонде делается ставка на рост российского долгового рынка.</p>
                <div className="row">
                  <div className="col-sm-8 col-xs-12">
                    <table className="table table_small">
                      <tr>
                        <th>стоимость СЧА</th>
                        <th>ДОХОДНОСТЬ за год</th>
                      </tr>
                      <tr>
                        <td>6294 млн. ₽</td>
                        <td className='green'>33%</td>
                      </tr>
                    </table>

                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <a href="#form-fb" className="card__button popup-link">Купить онлайн</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card__title">ОПИФ «Альфа-Капитал Стратегические инвестиции»</div>
                <a href="servicein.html" className="card__details">подробнее</a>
                <p className="card__desc">Рублевый облигационный фонд, основу портфеля которого составляют корпоративные рублевые облигации первого и второго эшелонов. Тактически в фонд могут включаться длинные облигации федерального займа. В фонде делается ставка на рост российского долгового рынка.</p>
                <div className="row">
                  <div className="col-sm-8 col-xs-12">
                    <table className="table table_small">
                      <tr>
                        <th>стоимость СЧА</th>
                        <th>ДОХОДНОСТЬ за год</th>
                      </tr>
                      <tr>
                        <td>6294 млн. ₽</td>
                        <td className='green'>33%</td>
                      </tr>
                    </table>

                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <a href="#form-fb" className="card__button popup-link">Купить онлайн</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card__title">ОПИФ «Альфа-Капитал Стратегические инвестиции»</div>
                <a href="servicein.html" className="card__details">подробнее</a>
                <p className="card__desc">Рублевый облигационный фонд, основу портфеля которого составляют корпоративные рублевые облигации первого и второго эшелонов. Тактически в фонд могут включаться длинные облигации федерального займа. В фонде делается ставка на рост российского долгового рынка.</p>
                <div className="row">
                  <div className="col-sm-8 col-xs-12">
                    <table className="table table_small">
                      <tr>
                        <th>стоимость СЧА</th>
                        <th>ДОХОДНОСТЬ за год</th>
                      </tr>
                      <tr>
                        <td>6294 млн. ₽</td>
                        <td className='green'>33%</td>
                      </tr>
                    </table>

                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <a href="#form-fb" className="card__button popup-link">Купить онлайн</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <nav>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabindex="-1">Назад</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active">
                  <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Вперед</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

    </div>
      ;
  }
}

UkList.propTypes = {
  //company: PropTypes.string.isRequired,
};

export default UkList;

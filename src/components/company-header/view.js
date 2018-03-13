import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { langs } from '../../lang/content';

import helper from '../../classes/helper';
import Calculate from '../../classes/calculate';
import API from '../../classes/api';
import Moment from 'moment';

class CompanyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
      loaded: false,
    };
  }

  componentDidMount() {
    this.getCompany();
  }

  getCompany() {
    API.getCompany(this.props.fund).then(data => {
      console.log(data);
    });
  }

  render() {
    return <div>
      <section className="serviceuk-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-title big-title_deco-closer white">Альфа капитал</h1>
              <p className="simple-text simple-text_wide white">Паевые инвестиционные фонды - это понятный и эффективный инструмент для тех, кто не инвестирует на фондовом рынке самостоятельно. ПИФы позволяют с небольшой суммой получать прибыль от целого портфеля ценных бумаг, которым управляет профессиональный менеджер. Чтобы начать инвестировать на фондовом рынке достаточно купить пай фонда. <a href="#about_company" className="red-link scroll2id _mPS2id-h mPS2id-clicked">Информация о компании</a></p>
            </div>
          </div>
          <div className="row">
            <div className="stat white">
              <div className="col-xs-6">
                <div className="stat-item stat-item_1">
                  <span className="stat-item__number">15</span>
                  <span className="stat-item__label">фондов</span>
                  <div className="stat-item__text">под Управлением УК</div>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="stat-item">
                  <span className="stat-item__number">21</span>
                  <span className="stat-item__label">млрд. руб</span>
                  <div className="stat-item__text">активов под управлением</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      ;
  }
}

CompanyHeader.propTypes = {
  fund: PropTypes.string.isRequired,
};

export default CompanyHeader;

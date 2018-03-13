import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { langs } from './lang';

import helper from '../../classes/helper';
import Calculate from '../../classes/calculate';
import API from '../../classes/api';
import Moment from 'moment';

class CalcMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: [],
      invest_summ: this.props.invest * 10,
      period: 1,
      type: 1,
      procent: 0, // Текущие проценты калькулятора
      total_rev: 0, // Общий доход
      my_rev: 0, // Мой доход
      pif_count: 0, // Количесво паев в сумме инвестирования
    };
  }

  componentWillMount() {
    this.loadPeriod();
  }

  componentDidMount() {

  }

  loadPeriod() {
    [1,3,6,12].map((item) => {
      this.addFundIncome(item);
    });
  }

  addFundIncome(i) {
    API.getFundIncome(this.props.pif, i).then(data => {
      data.period = i;
      this.setState({
        periods: [
          ...this.state.periods,
          data
        ],
      }, () => {
        this.calculate();
      });
    });
  }

  setInvest(e) {
    this.setState({
      invest_summ: parseInt(e.target.value)
    }, () => {
      this.calculate();
    });
  }

  setPeriod(e) {
    this.setState({
      period: parseInt(e.target.value)
    }, () => {
      this.calculate();
    });
  }

  setType(e) {
    this.setState({
      type: parseInt(e.target.value)
    }, () => {
      this.calculate();
    });
  }

  calculate() {
    var month = Moment().diff(this.props.date, 'month');
    var rsp = this.state.periods.filter(item => item.period == this.state.period)[0];
    var procent = Calculate.calculate(rsp.begNavOne, rsp.endNavOne, rsp.period, month, this.state.type);
    this.setState({
      pif_count: Calculate.pifCount(this.state.invest_summ, rsp.endNavOne).toFixed(2),
      procent: procent.toFixed(2),
      my_rev: Calculate.myRev(this.state.invest_summ, procent).toFixed(2),
      total_rev: Calculate.totalRev(this.state.invest_summ, procent).toFixed(2),
    });

  }

  render() {

    return <div>
      <div className="h5 h5_left">{langs.name}</div>
      <form className="calc">
        <div className="calc-item">
          <div className="calc__line">{langs.invest}</div>
          <div className="calc-input-wrapper">
            <input defaultValue={this.state.invest_summ} onChange={e => this.setInvest(e)}
                   pattern="[0-9]" className="calc__input" type="number" required/>
          </div>
        </div>
        <div className="calc-item">
          <div className="calc__line">{langs.period}</div>
          <div className="select_wrap">
            <select onChange={e => this.setPeriod(e)} className="select-calc" defaultValue={this.state.period}>
              {this.state.periods.sort(function(a, b){
                var a1 = a.period, b1 = b.period;
                if(a1 == b1) return 0;
                return a1 > b1? 1: -1;
              }).map((item, index) =>
                <option key={'df' + index} value={item.period}>{item.period} месяц</option>
              )}
            </select>
          </div>
        </div>
        <div className="calc-item">
          <div className="calc__line">{langs.yield}</div>
          <div className="select_wrap">
            <select onChange={e => this.setType(e)} defaultValue={this.state.type} className="select-calc">
              <option value="1">{langs.actual}</option>
              <option value="2">{langs.yearly}</option>
            </select>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <table className="table table_calc">
            <tbody>
            <tr>
              <th>{langs.total}</th>
              <td/>
              <td>{this.state.total_rev} ₽</td>
            </tr>
            <tr>
              <th>{langs.shares}</th>
              <td/>
              <td>{this.state.pif_count}</td>
            </tr>
            <tr>
              <th>{langs.income}</th>
              <td className="green">+{this.state.procent} %</td>
              <td>{this.state.my_rev} ₽</td>
            </tr>
            </tbody>

          </table>
        </div>
      </div>
      <p className="simple-text simple-text_small">{langs.text}</p>
    </div>
      ;
  }
}

CalcMoney.propTypes = {
  pif: PropTypes.number.isRequired,
  invest: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default CalcMoney;

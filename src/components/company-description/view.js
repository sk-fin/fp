import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import Accordion from '../../components/accordion';
import FundCard from '../../components/fund-card';
import UkTypeFilter from '../../components/uk-type-filter';
import FundDescription from "../../components/fund-description";

import { langs } from '../../lang/content';

import helper from '../../classes/helper';
import API from '../../classes/api';

class CompanyDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count_funds: 0,
      conut_money: 0,
      pifs: [],
      pifs_types: [],
      company: {},
      loadCompany: false,
    };
  }

  componentDidMount() {
    helper.setTitle();
    this.getCompany();
  }

  getCompany() {
    let get_cs = helper.findObjectInArray(this.props.companyList, 'prtId', parseInt(this.props.params.company));
    if (!!get_cs) {
      this.setDefaultState(get_cs);
    } else {
      API.getCompany(this.props.company).then(data => {
        this.setDefaultState(data);
        this.props.loadCompany(data);
      });
    }
  }

  setDefaultState (data) {
    this.setState({
      company: data,
      loadCompany: true,
      pifs: data.products.funds.fund,
      count_funds: data.products.funds.fund.length,
    });
    helper.setTitle(data.shortName);
    this.eachFunds(data.products.funds.fund);
  }

  eachFunds(data) {
    data.map((item, index, array) => {
      if (item.navAll) {
        this.setState({
          conut_money:  this.state.conut_money + parseInt(item.navAll),
          pifs_types: [
            ...this.state.pifs_types,
            parseInt(item.type)
          ],
        });
      }
    });
  }

  render() {
    var props = this.props;

    return <div className={this.state.loadCompany ? '' : 'loader'}>

      { this.state.loadCompany &&
      <section className="serviceuk-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-title big-title_deco-closer white">{this.state.company.shortName}</h1>
              <div dangerouslySetInnerHTML={{ __html: this.state.company.description }} className="simple-text simple-text_wide white"/>
            </div>
          </div>
          <div className="row">
            <div className="stat white">
              <div className="col-xs-6">
                <div className="stat-item stat-item_1">
                  <span className="stat-item__number">{this.state.count_funds}</span>
                  <span className="stat-item__label">{langs.companyFunds.funds}</span>
                  <div className="stat-item__text">{langs.companyFunds.underTheManagement}</div>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="stat-item">
                  <span className="stat-item__number">{(this.state.conut_money / 1000000000).toFixed(2)}</span>
                  <span className="stat-item__label">{langs.companyFunds.billionRubles}</span>
                  <div className="stat-item__text">{langs.companyFunds.assetsUnderManagement}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      }


      { !this.props.params.fund &&
      <div className="card-wrapper">
        <section className="cards">
          <div className="container">
            { helper.onlyUnique(this.state.pifs_types).length > 1 &&
              <UkTypeFilter pifs_types={helper.onlyUnique(this.state.pifs_types)}/>
            }
            <div className="row pff-list">
              {this.state.pifs.filter(function (pif) {
                return (props.typeFilter > 0) ? pif.type == props.typeFilter : pif.type > 0
              }).map((item, index) =>
                <div key={'pif' + index} className="col-md-6">
                  <FundCard id={item.id} company={this.props.params.company}/>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      }

      { this.props.params.fund &&
        <FundDescription fund={this.props.params.fund} company={this.state.company}/>
      }

      { !this.props.params.fund &&
      <section className="required-info">
        { this.state.loadCompany &&
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              { this.state.company.mainInformation &&
              <div>
                <h2 className="title title_deco">{langs.requiredInformation}</h2>
                <div dangerouslySetInnerHTML={{ __html: this.state.company.mainInformation }} className="simple-text"/>
              </div>
              }
              <div className="quotes"></div>
              <p className="simple-text simple-text_bold">{langs.companySpoiler.title}</p>
              <p className="simple-text light">{langs.companySpoiler.description}</p>
            </div>
          </div>
        </div>
        }
        { this.state.company.addInformations &&
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Accordion data={this.state.company.addInformations.information}/>
            </div>
          </div>
        </div>
        }
      </section>
      }

      </div>
      ;
  }
}

CompanyDescription.propTypes = {
  company: PropTypes.string.isRequired,
};

export default CompanyDescription;

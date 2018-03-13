import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { langs } from '../../lang/content';

import helper from '../../classes/helper';
import Calculate from '../../classes/calculate';
import API from '../../classes/api';

import CountPrevProcent from '../../components/count-prev-procent';
import FileList from '../../components/file-list';
import FeesList from '../../components/fees-list';
import StructureFund from '../../components/structure-fund';
import IncomesList from '../../components/incomes-list';
import CalcMoney from '../../components/calc-money';

class FundDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conut_funds: 0,
      conut_money: 0,
      pifs: [],
      pif: {},
      company: {},
      loadCompany: false,
      loadPif: false,
    };
  }

  componentWillMount() {
    helper.setTitle();
    this.getFund();
  }

  getFund() {
    let get_cs = helper.findObjectInArray(this.props.pifList, 'id', parseInt(this.props.fund));
    if (!!get_cs) {
      this.setDefaultState(get_cs);
    } else {
      API.getFund(this.props.fund).then(data => {
        this.setDefaultState(data);
        this.props.loadPif(data);
      });
    }

  }

  setDefaultState (data) {
    this.setState({
      pif: data,
      loadPif: true
    });
    helper.setTitle(data.shortName);
  }

  render() {

    return <div>

      <div className="card-details">
        <div className="container">
          { this.props.company &&
          <div className="row">
            <div className="col-md-12">
              <Link to={'/company/' + this.props.company.prtId} className="card__details--close">×</Link>
              <div className="card-details-header">
                <ul className="crumbs">
                  <li className="crumbs__item">{this.props.company.shortName}</li>
                  <li className="crumbs__item">{this.state.pif.shortName}</li>
                </ul>
              </div>
            </div>
          </div>
          }
          <div className="row">
            <div className="col-md-12">
              <div className="card-details-wrapper">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="table-responsive">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            { this.state.pif.navOne &&
                            <div className="col-xs-6">
                              <div className="th">{langs.navOne}</div>
                            </div>
                            }
                            { this.state.pif.dailyIncomeOne &&
                            <div className="col-xs-6">
                              <div className="th">{langs.dailyIncomeOne}</div>
                            </div>
                            }
                          </div>
                          <div className="row">
                            { this.state.pif.navOne &&
                            <div className="col-xs-6">
                              <div className="td">{this.state.pif.navOne} ₽</div>
                            </div>
                            }
                            { this.state.pif.dailyIncomeOne &&
                            <div className="col-xs-6">
                              <div className={['td', this.state.pif.dailyIncomeOne > 0 ? 'green' : 'red'].join(' ')}>{this.state.pif.dailyIncomeOne} %</div>
                            </div>
                            }
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            { this.state.pif.navAll &&
                            <div className="col-xs-6">
                              <div className="th">{langs.navAll}</div>
                            </div>
                            }
                            { this.state.pif.minInvestSum &&
                            <div className="col-xs-6">
                              <div className="th">{langs.minInvestSum}</div>
                            </div>
                            }
                          </div>
                          <div className="row">
                            { this.state.pif.navAll &&
                            <div className="col-xs-6">
                              <div className="td">{(this.state.pif.navAll / 1000000).toFixed(2)} млн. ₽</div>
                            </div>
                            }
                            { this.state.pif.minInvestSum &&
                            <div className="col-xs-6">
                              <div className="td">{this.state.pif.minInvestSum} ₽</div>
                            </div>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  { this.state.pif.buyOnlineURL &&
                  <div className="col-sm-4">
                    <Link to={this.state.pif.buyOnlineURL} className="button button_xlg-float">{langs.buttons.buy}</Link>
                  </div>
                  }
                </div>
                <div className="line"></div>
                { this.state.pif.shortName &&
                  <h5 className="h5">{this.state.pif.shortName}</h5>
                }
                { this.state.pif.fullDescr &&
                  <div dangerouslySetInnerHTML={{ __html: this.state.pif.fullDescr }} className="simple-text simple-text_thin light"/>
                }

                { this.state.pif.advantages &&
                  <div>
                    <h6 className="h6">{langs.advantages}:</h6>
                    <ul className="list-deco">
                      {this.state.pif.advantages.advantage.map((item, index) =>
                        <li key={'p' + index} className="list-deco__item col-md-6">{item.description}</li>
                      )}
                    </ul>
                    <div className="line"></div>
                  </div>
                }

                { this.state.pif.incomes &&
                  <IncomesList title={langs.incomes} list={this.state.pif.incomes.income}/>
                }

                { this.state.pif.id &&
                  <CalcMoney pif={this.state.pif.id}
                             invest={this.state.pif.minInvestSum}
                             price={this.state.pif.navOne}
                             date={this.state.pif.formationDate}/>
                }

                { this.state.pif.buyOnlineURL &&
                  <Link to={this.state.pif.buyOnlineURL} className="button button_xlg">{langs.buttons.buy}</Link>
                }
                <div className="line"></div>


                { this.state.pif.structure &&
                  <div>
                    <StructureFund date={this.state.pif.dataDate} title={langs.structure} structure={this.state.pif.structure.active}/>
                    <div className="line"></div>
                  </div>
                }

                { this.state.pif.id &&
                  <CountPrevProcent fund={this.state.pif.id} title={langs.countPrevProcent}/>
                }

                { this.state.pif.fees &&
                  <div>
                    <FeesList list={this.state.pif.fees.fee} title={langs.fees}/>
                    <div className="line"></div>
                  </div>
                }

                { this.state.pif.fileLinks &&
                  <FileList title={langs.fileLinks} list={this.state.pif.fileLinks.link}/>
                }

                { this.state.pif.buyOnlineURL &&
                <Link to={this.state.pif.buyOnlineURL} className="button button_xlg">{langs.buttons.buy}</Link>
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      ;
  }
}

FundDescription.propTypes = {
  fund: PropTypes.string.isRequired,
};

export default FundDescription;

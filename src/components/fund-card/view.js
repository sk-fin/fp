import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { langs } from '../../lang/content';

import helper from '../../classes/helper';
import API from '../../classes/api';

class FundCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: {},
    };
  }

  componentDidMount() {
    this.getFund();
  }

  getFund() {
    let get_cs = helper.findObjectInArray(this.props.pifList, 'id', parseInt(this.props.id));
    if (!!get_cs) {
      this.setState({
        loading: true,
        data: get_cs,
      });
    } else {
      API.getFund(this.props.id).then(data => {
        this.setState({
          loading: true,
          data: data,
        });
        this.props.loadPif(data);
      });
    }
  }

  render() {
    return <div>
      { this.state.loading &&
      <div className="card">
        <div className="short-desct-pif">
          <div className="card__title">{this.state.data.shortName}</div>
          <Link to={'/company/' + this.props.company + '/fund/' + this.props.id} className="card__details">{langs.buttons.more}</Link>
          <p dangerouslySetInnerHTML={{ __html: this.state.data.shortDescr }} className="card__desc"/>
        </div>
        <div className="row">
          <div className="col-sm-8 col-xs-12">
            <table className="table table_small">
              <tbody>
              <tr>
                { this.state.data.navAll &&
                <th>{langs.companyFunds.costOfNAV}</th>
                }
                { this.state.data.dailyIncomeOne &&
                <th>{langs.companyFunds.perYear}</th>
                }
              </tr>
              <tr>
                { this.state.data.navAll &&
                <td>{(parseInt(this.state.data.navAll) / 1000000).toFixed(2)} млн. ₽</td>
                }
                { this.state.data.dailyIncomeOne &&
                <td className='green'>{this.state.data.dailyIncomeOne}%</td>
                }
              </tr>
              </tbody>

            </table>
          </div>
          <div className="col-sm-4 col-xs-12">
            <Link to={this.state.data.buyOnlineURL} className="card__button popup-link">{langs.buttons.buy}</Link>
          </div>
        </div>
      </div>
      }


      </div>



      ;

  }
}

FundCard.propTypes = {

};

export default FundCard;

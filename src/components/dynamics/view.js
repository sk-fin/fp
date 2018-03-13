import React, { PropTypes, Component } from 'react';
import HtmlParser from 'html-react-parser';

import helper from '../../classes/helper';

import { langs } from '../../lang/content';
import ButtonConnectToServer from '../../components/button-connect-to-server';

class Dynamics extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return  <section className="dynamics">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title">{langs.dynamics.title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <tbody>
              <tr className="small">
                <th/>
                <th>{langs.dynamics.data.head.previousDate}</th>
                <th>{langs.dynamics.data.head.currentDate}</th>
                <th>{langs.dynamics.data.head.perDay}</th>
                <th>{langs.dynamics.data.head.perMonth}</th>
                <th>{langs.dynamics.data.head.yearAgo}</th>
                <th>{langs.dynamics.data.head.twoYearAgo}</th>
              </tr>
              {langs.dynamics.data.numbers.map((item, index) =>
                <tr key={'v' + index}>
                  <th>{item.name}</th>
                  <td>{item.previousDate}</td>
                  <td>{item.currentDate} ₽</td>
                  <td className="green">{item.perDay}%</td>
                  <td className="red">{item.perMonth}%</td>
                  <td className="red">{item.yearAgo}%</td>
                  <td className="green">{item.twoYearAgo}%</td>
                </tr>
              )}
              </tbody></table>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <ButtonConnectToServer buttomName={langs.buttons.client} buttomClass={'button popup-connect'}/>
          </div>
        </div>

      </div>
    </section>;
  }
}

Dynamics.propTypes = {

};


export default Dynamics;

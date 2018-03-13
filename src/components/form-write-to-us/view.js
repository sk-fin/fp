import React, { PropTypes, Component } from 'react';

import popup from '../../containers/popup';

import { langs } from '../../lang/content';

const formName = 'write-us';

import Mail from '../../classes/mail';


class FormWriteToUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      send: false,
    };
  }

  componentWillMount() {
    this.setState({
      send: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    Mail.sendMailConnect({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    }).then(data => {
      if (data.status == 'OK') {
        this.setState({
          send: true,
        });
      }
    });
    //alert("Имя: " + this.state.name);
  }

  render() {
    return <form onSubmit={(e) => this.handleSubmit(e)} className={["form-fb"]} >

      <div className="form-fb-wrapper">

        <div className="row">
          <div className="col-md-12">
            <span className="form-fb__title">{langs.forms.feedback}</span>
          </div>
        </div>
        { !this.state.send &&
          <div>
            <div className="row">
              <div className="col-sm-6">
                <input onChange={(e) => this.setState({ name: e.target.value })} type="text" className="form-fb__input" placeholder={langs.forms.name + " *"} required/>
              </div>
              <div className="col-sm-6">
                <input onChange={(e) => this.setState({ email: e.target.value })} type="text" className="form-fb__input" placeholder={langs.forms.email + " *"} required/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <textarea onChange={(e) => this.setState({ message: e.target.value })} className="form-fb__textarea" placeholder={langs.forms.message + " *"} required/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                <span className="form-fb__desc">{langs.forms.required} <span className="red">*</span></span>
              </div>
              <div className="col-sm-4">
                <button className="form-fb__button button">{langs.buttons.send}</button>
              </div>
            </div>
          </div>
        }
        { this.state.send &&
        <div>
          <div className="h4" style={{
            color: '#000',
          }}>
            {langs.forms.ok_2}
          </div>
          <div>
            <button onClick={() => this.props.onShowPopup('')} className="form-fb__button button">{langs.buttons.back}</button>
          </div>
        </div>
        }
      </div>
      <button title="Close (Esc)" onClick={() => this.props.onShowPopup('')} type="button" className="mfp-close">×</button>
    </form>
      ;
  }
}

FormWriteToUs.propTypes = {

};

export default popup(FormWriteToUs, '', formName);

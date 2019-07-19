import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { urlApi } from '../constants';
import './SignIn.scss';

import { logAdmin } from '../actions/logAdmin';

class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitForm = (event) => {
    const { logAdmin, history, location: { state } } = this.props;
    event.preventDefault();
    fetch(`${urlApi}/admin/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error();
      })
      .then((admin) => {
        NotificationManager.success('', 'Wilder connecté!', 3000);
        logAdmin(admin);
        setTimeout(() => {
          const nextLocation = state ? state.from.pathname : '/admin/accueil';
          history.push(nextLocation);
        }, 1000);
        localStorage.setItem('login', admin.token);
      })
      .catch(() => {
        NotificationManager.error('', 'Erreur d\'authentification.', 3000);
      });
  }

  render() {
    const { login, password } = this.state;
    return (
      <div className="SignIn">
        <form onSubmit={this.submitForm}>
          <label htmlFor="login">
            Login :
            <input id="login" type="text" name="login" value={login} onChange={this.handleChange} />
          </label>
          <label htmlFor="password">
          password :
            <input id="password" type="password" name="password" value={password} onChange={this.handleChange} />
          </label>
          <button type="submit">Connection</button>
        </form>
        <NotificationContainer />
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({ logAdmin }, dispatch);

export default connect(null, mdtp)(SignIN);
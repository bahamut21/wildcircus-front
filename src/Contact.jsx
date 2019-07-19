import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { asyncFetchWithUrl } from './actions/fetchWithUrl';
import { urlApi } from './constants';
import './Contact.scss';


class Contact extends Component {
 
  submitEvent = (values) => {
    const data = {
      ...values,
    };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const url = `${urlApi}/user`;
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'user updated!',2000);
        } else {
          NotificationManager.warning('', 'Update error.', 2000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Update error', 2000);
      });
  }

  
  render() {
    const {
      handleSubmit,
    } = this.props;
    return (
      <div className="Contact">
        <div className="col-12 col-md-6 m-auto">
        <img className="logo" src="https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/MtkMMSYUMRJXWvpisxsF7F/7ecba98b-973c-42f0-8c49-ccfc9959bc60.jpg/r0_0_3264_4352_w1200_h678_fmax.jpg" alt="display event" />
        </div>
        <div className="col-12 col-md-6 m-auto">
        <h1>{`Contact us`}</h1>
        <NotificationContainer />
        <form onSubmit={handleSubmit(this.submitEvent)}>
          <div>
            <label>firstName</label>
            <div>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <label>lastName</label>
            <div>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <label>city</label>
            <div>
              <Field
                name="city"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <label>email</label>
            <div>
              <Field
                name="email"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <label>ticket gold</label>
            <div>
              <Field
                name="nbTicket1"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <label>ticket sylver</label>
            <div>
              <Field
                name="nbTicket2"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <label>ticket bronze</label>
            <div>
              <Field
                name="nbTicket3"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <label>select id</label>
            <div>
              <Field
                name="event_id"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <button type="submit">
              Submit
            </button>
            <NavLink to={`/`}>
              <button type="button">
                Back
              </button>
            </NavLink>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  datas: state.fetchWithUrl.list[0], // from reducer
  route: state.fetchWithUrl.value, // from reducer
  error: state.fetchWithUrl.error, // from reducer
  loading: state.fetchWithUrl.loading, // from reducer
});


const mdtp = dispatch => bindActionCreators({ asyncFetchWithUrl }, dispatch);

export default reduxForm({
  form: 'Contact', // a unique identifier for this form
})(connect(mstp, mdtp)(Contact));
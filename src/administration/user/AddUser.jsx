import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { asyncFetchWithUrl } from '../../actions/fetchWithUrl';
import { urlApi } from '../../constants';
import { Button } from 'reactstrap';
import './UpdateUser.scss';


class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
    }
  };

  displayEvent = () => {
    fetch(`${urlApi}/event/name/info`)
      .then(res => res.json())
      .then((event) => {
        this.setState({ event })
      })
      .catch(() => {
        NotificationManager.warning('', 'Update error.', 2000);
      });
  }

  submitEvent = (values) => {
    const { history } = this.props;
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
          NotificationManager.success('', 'user updated!', 2000);
          setTimeout(() => history.push('/admin/accueil'), 1588);
        } else {
          NotificationManager.warning('', 'Update error.', 2000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Update error', 2000);
      });
  }


  render() {
    const { event } = this.state;
    const {
      handleSubmit,
    } = this.props;
    return (
      <div className="UpdateUser">
        <div className="col-12 col-md-6 m-auto">
          <img className="logo" src="https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/MtkMMSYUMRJXWvpisxsF7F/7ecba98b-973c-42f0-8c49-ccfc9959bc60.jpg/r0_0_3264_4352_w1200_h678_fmax.jpg" alt="display event" />
        </div>
        <div className="col-12 col-md-6 m-auto">
          <h1>{`Add new user`}</h1>
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
              <label>nbTicket gold</label>
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
              <label>nbTicket sylver</label>
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
              <label>nbTicket bronze</label>
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
              <label>Event</label>
              <div onClick={this.displayEvent}>
                <Field name="event_id" component="select">
                  <option />
                  {
                    event.map(event => <option value={event.id}>{event.name}</option>)
                  }
                </Field>
              </div>
            </div>
            <div>
              <Button color="danger" type="submit">
                Add
                </Button>
              <NavLink to={`/admin/user`}>
                <Button color="light" type="button">
                  Back
                </Button>
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
  form: 'UpdateUser', // a unique identifier for this form
})(connect(mstp, mdtp)(UpdateUser));
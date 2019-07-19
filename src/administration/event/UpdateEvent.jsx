import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { asyncFetchWithUrl } from '../../actions/fetchWithUrl';
import { urlApi } from '../../constants';
import { Button } from 'reactstrap';
import './UpdateEvent.scss';


class UpdateEvent extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { asyncFetchWithUrl } = this.props; // from actions
    const route = `event/${id}`
    asyncFetchWithUrl(route);

  }

  submitEvent = (values) => {
    const { match: { params: { id } }, history } = this.props;
    const data = {
      ...values,
    };
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const url = `${urlApi}/event/${id}`;
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Event updated!', 2000);
          setTimeout(() => history.push('/admin/managecompany'), 1588);
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
      datas: {
        name, city, description, date, picture1, picture2, picture3, picture4, picture5, tarif1, tarif2, tarif3,
      },
    } = this.props;
    return (
      <div className="UpdateEvent">
        <div className="col-12 col-md-6 m-auto">
          <img className="logo" src={picture1} alt="display event" />
        </div>
        <div className="col-12 col-md-6 m-auto">
          <h1>{`Modifier ${name}`}</h1>
          <NotificationContainer />
          <form onSubmit={handleSubmit(this.submitEvent)} className="formulaire">
            <div>
              <div>
                <label>name</label>
                <div>
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder={name}
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
                    placeholder={city}
                  />
                </div>
              </div>
              <div>
                <label>date</label>
                <div>
                  <Field
                    name="date"
                    component="input"
                    type="text"
                    placeholder={date}
                  />
                </div>
              </div>
              <div>
                <label>tarif1</label>
                <div>
                  <Field
                    name="tarif1"
                    component="input"
                    type="text"
                    placeholder={tarif1}
                  />
                </div>
              </div>
              <div>
                <label>tarif2</label>
                <div>
                  <Field
                    name="tarif2"
                    component="input"
                    type="text"
                    placeholder={tarif2}
                  />
                </div>
              </div>
              <div>
                <label>tarif3</label>
                <div>
                  <Field
                    name="tarif3"
                    component="input"
                    type="text"
                    placeholder={tarif3}
                  />
                </div>
              </div>
              <div>
                <label>Description</label>
                <div>
                  <Field name="description" component="textarea" placeholder={description} />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label>picture1</label>
                <div>
                  <Field name="picture1" component="textarea" placeholder={picture1} />
                </div>
              </div>
              <div>
                <label>picture2</label>
                <div>
                  <Field name="picture2" component="textarea" placeholder={picture2} />
                </div>
              </div>
              <div>
                <label>picture3</label>
                <div>
                  <Field name="picture3" component="textarea" placeholder={picture3} />
                </div>
              </div>
              <div>
                <label>picture4</label>
                <div>
                  <Field name="picture4" component="textarea" placeholder={picture4} />
                </div>
              </div>
              <div>
                <label>picture5</label>
                <div>
                  <Field name="picture5" component="textarea" placeholder={picture5} />
                </div>
              </div>
              <div>
                <Button color="danger" type="submit">
                  Update
            </Button>
                <NavLink to={`/admin/event`}>
                  <Button color="light" type="button">
                    Back
              </Button>
                </NavLink>
              </div>
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
  form: 'UpdateEvent', // a unique identifier for this form
})(connect(mstp, mdtp)(UpdateEvent));
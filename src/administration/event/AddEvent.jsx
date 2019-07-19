import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { asyncFetchWithUrl } from '../../actions/fetchWithUrl';
import { urlApi } from '../../constants';
import { Button } from 'reactstrap';
import './AddEvent.scss';


class AddEvent extends Component {

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
    const url = `${urlApi}/event`;
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Event updated!', 2000);
          setTimeout(() => history.push('/admin/accueil'), 1588);
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
      <div className="AddEvent">
        <div className="col-12 col-md-6 m-auto">
          <img className="logo" src="https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/MtkMMSYUMRJXWvpisxsF7F/7ecba98b-973c-42f0-8c49-ccfc9959bc60.jpg/r0_0_3264_4352_w1200_h678_fmax.jpg" alt="display event" />
        </div>
        <div className="col-12 col-md-6 m-auto">
          <h1>Add New Event</h1>
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
                <label>date</label>
                <div>
                  <Field
                    name="date"
                    component="input"
                    type="text"
                    placeholder=""
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
                    placeholder=""
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
                    placeholder=""
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
                    placeholder=""
                  />
                </div>
              </div>
              <div>
                <label>Description</label>
                <div>
                  <Field name="description" component="textarea" placeholder="" />
                </div>
              </div>
            </div>
            <div className="pp">
              <div>
                <label>picture1</label>
                <div>
                  <Field name="picture1" component="textarea" placeholder="" />
                </div>
              </div>
              <div>
                <label>picture2</label>
                <div>
                  <Field name="picture2" component="textarea" placeholder="" />
                </div>
              </div>
              <div>
                <label>picture3</label>
                <div>
                  <Field name="picture3" component="textarea" placeholder="" />
                </div>
              </div>
              <div>
                <label>picture4</label>
                <div>
                  <Field name="picture4" component="textarea" placeholder="" />
                </div>
              </div>
              <div>
                <label>picture5</label>
                <div>
                  <Field name="picture5" component="textarea" placeholder="" />
                </div>
              </div>
              <div>
                <Button color="danger" type="submit">
                  Valider
                </Button>
                <NavLink to={`/admin/event`}>
                  <Button color="light" type="button">
                    Retour
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
  form: 'AddEvent', // a unique identifier for this form
})(connect(mstp, mdtp)(AddEvent));
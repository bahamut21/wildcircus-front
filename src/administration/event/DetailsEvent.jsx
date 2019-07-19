import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { asyncFetchWithUrl } from '../../actions/fetchWithUrl';
import { Button } from 'reactstrap';
import './DetailsEvent.scss';


class DetailsEvent extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { asyncFetchWithUrl } = this.props; // from actions
    const route = `event/${id}`
    asyncFetchWithUrl(route);

  }

  render() {
    const {
      datas: {
        name, city, description, date, picture1, picture2, picture3, picture4, picture5, tarif1, tarif2, tarif3,
      },
    } = this.props;
    return (
      <div className="DetailsEvent">
        <div className="Event row col-12 m-auto">
          <div className="col-12 col-md-4">
            <div>
              <h3>{name}</h3>
              <span>{city}</span>
              <span>{date}</span>
            </div>
            <div>
              <img src={picture1} alt={`event from ${city}`} />
            </div>
          </div>
          <div className="col-12 col-md-8 mt-auto">
            <img src={picture2} alt={`event from ${city}`} />
            <img src={picture3} alt={`event from ${city}`} />
            <img src={picture4} alt={`event from ${city}`} />
            <img src={picture5} alt={`event from ${city}`} />
          </div>
          <div>
          <div>
            desciption :
          {description}
          </div>
          <div>
            tarifs 1 :
          {tarif1}
          </div>
          <div>
            tarifs 2 :
          {tarif2}
          </div>
          <div>
            tarifs 3 :
          {tarif3}
          </div>
          </div>
          <NavLink to={`/admin/event`}>
            <Button color="light" type="button">
              Back
              </Button>
          </NavLink>
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

export default (connect(mstp, mdtp)(DetailsEvent));
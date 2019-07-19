import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { asyncFetchWithUrl } from '../../actions/fetchWithUrl';
import TarifAdmin from './TarifAdmin';
import { Button } from 'reactstrap';
import './DetailsUser.scss';


class DetailsUser extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { asyncFetchWithUrl } = this.props; // from actions
    const route = `user/tickets/${id}`
    asyncFetchWithUrl(route);
    
  }

  
  render() {
    const {
      datas,
      datas: {
        firstName, lastName, email, city, nbTicket1, nbTicket2, nbTicket3, picture1, name, location, description, date,
      },
    } = this.props;
    return (
      <div className="DetailsUser">
        <div className="Event row col-12 m-auto">
      <div className="col-12 col-md-4">
        <div>
          <img src={picture1} alt={`event from ${city}`} />
        </div>
      </div>
      <div className="details col-12 col-md-8 mb-auto">
        <h3>{name}</h3>
        <p>location : {location}</p>
        <p>date : {date}</p>
        <p>firstName : {firstName}</p>
        <p>lastName : {lastName}</p>
        <p>email : {email}</p>
        <p>city : {city}</p>
        <p>ticket gold : {nbTicket1}</p>
        <p>ticket sylver : {nbTicket2}</p>
        <p>nbTicket3 bronze :{nbTicket3}</p>
        <p>desciption : {description}</p>
        <TarifAdmin datas={datas}/>
        <NavLink to={`/admin/user`}>
          <Button type="button">
            Retour
          </Button>
        </NavLink>
        </div>
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

export default(connect(mstp, mdtp)(DetailsUser));
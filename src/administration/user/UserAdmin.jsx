import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import { NavLink as NL } from 'react-router-dom';
import './UserAdmin.scss';

const UserAdmin = (props) => {
  const { user: { id, firstName, lastName, email, city, nbTicket1, nbTicket2, nbTicket3 } } = props;
  return (
    <div className="UserAdmin col-12 col-md-6 m-auto">
      <Card>
        <CardHeader>{lastName + ' ' + firstName}</CardHeader>
        <CardBody>
          <CardTitle>{city}</CardTitle>
          <CardText>nb of tickets 1st : {nbTicket1}</CardText>
          <CardText>nb of tickets 2nd : {nbTicket2}</CardText>
          <CardText>nb of tickets 3rd : {nbTicket3}</CardText>
          <NL to={`/admin/user/update/${id}`}><Button color="danger">Update</Button></NL>
          <NL to={`/admin/user/delete/${id}`}><Button>Delete</Button></NL>
          <NL to={`/admin/user/details/${id}`}><Button color="danger"> View </Button></NL>
          <NL to={`/admin/user/adduser/`}><Button> Add new user </Button></NL>
          <NL to={`/admin/`}><Button color="danger"> Admin </Button></NL>
        </CardBody>
        <CardFooter>{email}</CardFooter>
      </Card>
    </div>
  );
};

export default UserAdmin;

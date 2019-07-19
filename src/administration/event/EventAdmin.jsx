import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardImg,
  CardTitle } from 'reactstrap';
import { NavLink as NL } from 'react-router-dom';
import './EventAdmin.scss';

const EventAdmin = (props) => {
  const { event: { name, city, date, picture2, id } } = props;
  return (
    <div className="EventAdmin col-12 col-md-6 m-auto">
      <Card>
        <CardHeader>{name}</CardHeader>
        <CardBody>
          <CardTitle>{city}</CardTitle>
          <CardImg top width="10%" src={picture2} alt="Card image circus" />
          <NL to={`/admin/event/update/${id}`}><Button color="danger">Update</Button></NL>
          <NL to={`/admin/event/delete/${id}`}><Button color="light">Delete</Button></NL>
          <NL to={`/admin/event/details/${id}`}><Button color="danger"> View </Button></NL>
          <NL to={`/admin/event/addevent/${id}`}><Button color="light"> Add new event </Button></NL>
          <NL to={`/admin/accueil`}><Button color="danger"> Admin </Button></NL>
        </CardBody>
        <CardFooter>{date}</CardFooter>
      </Card>
    </div>
  );
};

export default EventAdmin;

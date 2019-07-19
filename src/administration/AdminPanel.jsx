import React from 'react';
import { Button } from 'reactstrap';
import { NavLink as NL } from 'react-router-dom';
import './AdminPanel.scss';

function AdminPanel() {
  const logOut = () => {
    localStorage.clear();
  };
  
  return (
    <div className="AdminPanel">
      <div className="col-12 col-md-6 m-auto">
      <h1>Welcome to your AdminPanel</h1>
      </div>
      <div className="col-12 col-md-6 m-auto">
      <NL to="/admin/event"><Button color="danger">Manage Events</Button></NL>
      <NL to="/admin/user"><Button color="light">Manage Users</Button></NL>
      <NL to="/"><Button color="danger" onClick={logOut}> Disconnect Admin </Button></NL>
      </div>
    </div>
  );
}

export default AdminPanel;

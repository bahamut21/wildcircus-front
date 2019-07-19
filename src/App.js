import React from 'react';
import { Switch, Route} from 'react-router-dom';
import PrivateRoute from './authentification/PrivateRoute';
import NavbarByBootStrap from './NavbarByBootStrap';
import Home from './Home';
import Contact from './Contact';
import Gallery from './gallery/Gallery';
import Tickets from './Tickets';
import SignIn from './authentification/SignIn';
import AdminPanel from './administration/AdminPanel';
import './App.scss';
import DisplayEvent from './administration/event/DisplayEvent';
import UpdateEvent from './administration/event/UpdateEvent';
import DeleteEvent from './administration/event/DeleteEvent';
import DetailsEvent from './administration/event/DetailsEvent';
import AddEvent from './administration/event/AddEvent';
import DisplayUser from './administration/user/DisplayUser';
import UpdateUser from './administration/user/UpdateUser';
import DeleteUser from './administration/user/DeleteUser';
import DetailsUser from './administration/user/DetailsUser';
import AddUser from './administration/user/AddUser';

function App() {
  return (
    <div className="App">
      <NavbarByBootStrap />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/admin/signin" component={SignIn} />
        <PrivateRoute path="/admin/accueil" component={AdminPanel} />
        <PrivateRoute exact path="/admin/event" component={DisplayEvent} />
        <PrivateRoute path="/admin/event/update/:id" component={UpdateEvent} />
        <PrivateRoute path="/admin/event/delete/:id" component={DeleteEvent} />
        <PrivateRoute path="/admin/event/details/:id" component={DetailsEvent} />
        <PrivateRoute path="/admin/event/addevent" component={AddEvent} />
        <PrivateRoute exact path="/admin/user" component={DisplayUser} />
        <PrivateRoute path="/admin/user/update/:id" component={UpdateUser} />
        <PrivateRoute path="/admin/user/delete/:id" component={DeleteUser} />
        <PrivateRoute path="/admin/user/details/:id" component={DetailsUser} />
        <PrivateRoute path="/admin/user/adduser" component={AddUser} />
      </Switch>
    </div>
  );
}

export default App;

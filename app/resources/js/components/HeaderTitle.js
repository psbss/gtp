import React from 'react';
import {
  Link,
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './LoginBtn';
import Logout from './LogoutBtn';

const Header = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <h1><Link to='/'>ToDoList</Link></h1>
        </div>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/' component={Logout} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Header;

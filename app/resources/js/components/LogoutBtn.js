import React from 'react';
import {
  Link,
  BrowserRouter,
} from 'react-router-dom'

const LogoutBtn = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/logout">Logout</Link>
      </div>
    </BrowserRouter>
  );
}

export default LogoutBtn;

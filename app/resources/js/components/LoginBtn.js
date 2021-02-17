import React from 'react';
import {
  Link,
  BrowserRouter,
} from 'react-router-dom'

const LoginBtn = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </BrowserRouter>
  );
}

export default LoginBtn;

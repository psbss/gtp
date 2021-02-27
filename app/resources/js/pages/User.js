import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import SnsBtn from '../components/SnsShareBtn';
import Footer from '../components/Footer';

const User = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <p>ユーザページ</p>
      </div>
      <SnsBtn />
      <Footer />
    </div>
  );
}

if (document.getElementById('user')) {
  ReactDOM.render(<User />, document.getElementById('user'));
}

export default User;
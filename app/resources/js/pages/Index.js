import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import SnsBtn from '../components/SnsShareBtn';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <p>『Todo List』は全く新しいToDoリストです。</p>
      </div>
      <SnsBtn />
      <Footer />
    </div>
  );
}

if (document.getElementById('index')) {
  ReactDOM.render(<Index />, document.getElementById('index'));
}

export default Index;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderTitle from '../components/HeaderTitle';

const Index = () => {
    return (
        <div>
            <HeaderTitle />
        </div>
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

export default Index;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App.jsx';
import Dati from './view/Dati.jsx';
import Result from './view/Result.jsx';
// import { Button } from 'antd';
// import 'antd/dist/antd.css';

import {Provider} from 'react-redux'
import {BrowserRouter as Router, Link,Route} from 'react-router-dom'

import store from './store/data'


ReactDOM.render(
  <Provider store={store}>
      <Router>
        <Route path="/" exact component={App}>
        </Route>
        <Route path="/dati" exact component={Dati}>
        </Route>
        <Route path="/result" exact component={Result}>
        </Route>
      </Router>
  </Provider>
  ,
  document.getElementById('root')
);


import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// ReactDOM.render(<App />, document.getElementById('root'));





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


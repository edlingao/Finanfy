import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from 'views/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'global-scss/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={ <Home />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

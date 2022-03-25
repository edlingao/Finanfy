import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from 'views/home';
import { Add } from './views/add';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'global-scss/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/add' element={ <Add />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

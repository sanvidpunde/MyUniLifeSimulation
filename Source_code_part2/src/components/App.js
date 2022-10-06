import './App.css';

import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Home from './Home';
import Budget from './Budget';
import Streams from './Steams';
import Club from './Club';
import Coa from './Coa';

export default class App extends React.Component {
  render() {
    return(
        <div>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/budget' element={<Budget/>} />
              <Route path='/steam' element={<Streams/>} />
              <Route path='/coa-a' element={<Coa/>} />
              <Route path='/club' element={<Club/>} />
            </Routes>
        </div>
    );
  }
}
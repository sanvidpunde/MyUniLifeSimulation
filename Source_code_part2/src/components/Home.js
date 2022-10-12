import './App.css';

import React from "react";
import { Link } from 'react-router-dom';

export default class Budget extends React.Component {
  constructor (props) {
    super();
    window.clickStatus = 0;
  }
  setStatus(value) {
    window.clickStatus = value;
    if(document.querySelectorAll('.box-wrapper.selected').length > 0) {
      document.querySelector('.box-wrapper.selected').classList.remove('selected');
    }
    document.querySelector(`.box-${value}`).classList.add('selected');
  }
  sendCondtion() {
    let currentStatus = window.clickStatus;
    if (window.clickStatus ==  1) {
      currentStatus = '/club'
    }
    if (window.clickStatus ==  2) {
      currentStatus = '/steam'
    }
    if (window.clickStatus ==  3) {
      currentStatus = '/budget'
    }
    if (window.clickStatus ==  4) {
      currentStatus = '/coa-a'
    }
    window.location = currentStatus;
  }
  render() {
    return(
        <nav className="App">
            <div className='home-container'>
                <div className='box-wrapper box-1' onClick={() => {this.setStatus(1)}}>
                    <p className='club'>Club</p>
                </div>
                <div className='box-wrapper box-2' onClick={() => {this.setStatus(2)}}>
                    <p className='club'>Streams</p>
                </div>
                <div className='box-wrapper box-3' onClick={() => {this.setStatus(3)}}>
                    <p className='club'>Budget</p>
                </div>
                <div className='box-wrapper box-4' onClick={() => {this.setStatus(4)}}>
                    <p className='club'>CAO Points</p>
                </div>
            </div>
            <div className='action-wrapper'>
                <Link onClick={() => {this.sendCondtion()}}>Submit</Link>
            </div>
        </nav>
    );
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const Header = () => (
  <header>
    <h1>
      <span className="tail">Brightspace Quiz Demo - In Progress</span>
    </h1>
  </header>
);

export default Header;


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



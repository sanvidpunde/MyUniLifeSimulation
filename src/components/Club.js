import './App.css';

import React from "react";

export default class Budget extends React.Component {
  render() {
    return(
      <table>
          <tr>
            <td>Cricket</td>
            <td>Golf</td>
          </tr>
          <tr>
            <td>Football</td>
            <td>Table Tennis</td>
          </tr>
      </table>
    );
  }
}
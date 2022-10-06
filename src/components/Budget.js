import './App.css';

import React from "react";

export default class Budget extends React.Component {
  render() {
    return(
      <table>
          <tr>
            <td>5 - 10</td>
          </tr>
          <tr>
            <td>10 - 20</td>
          </tr>
          <tr>
            <td>20 - Max</td>
          </tr>
      </table>
    );
  }
}
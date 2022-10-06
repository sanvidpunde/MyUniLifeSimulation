import './App.css';

import React from "react";

export default class Budget extends React.Component {
  render() {
    return(
      <table>
          <tr>
            <td colSpan={3}>TU059</td>
          </tr>
          <tr>
            <td>60</td>
            <td>61</td>
            <td>62</td>
          </tr>
      </table>
    );
  }
}
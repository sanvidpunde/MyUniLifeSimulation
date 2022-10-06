import './App.css';

import React from "react";

export default class Budget extends React.Component {
  saveFunction() {
      var textToSave = 'Cricket     Golf\n====================\nFootball    Table Tennis';
      var hiddenElement = document.createElement('a');
      hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
      hiddenElement.target = '_blank';
      hiddenElement.download = 'Final.txt';
      hiddenElement.click();
  }
  render() {
    return(
      <>
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
        <a href='#' className='finalSubmit' onClick={() => {this.saveFunction();}}>Submit</a>
      </>
    );
  }
}
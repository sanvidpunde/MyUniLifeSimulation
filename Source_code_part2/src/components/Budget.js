import './App.css';

import React from "react";

export default class Budget extends React.Component {
  saveFunction() {
    var textToSave = '5-10\n=======10-20\n=======20-max';
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
              <td>5 - 10</td>
            </tr>
            <tr>
              <td>10 - 20</td>
            </tr>
            <tr>
              <td>20 - Max</td>
            </tr>
        </table>
        <a href='#' className='finalSubmit' onClick={() => {this.saveFunction();}}>Submit</a>
      </>
    );
  }
}
import './App.css';

import React from "react";

export default class Coa extends React.Component {
  saveFunction() {
      var textToSave = '0-65';
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
              <td>0 - 65</td>
            </tr>
        </table>
        <a href='#' className='finalSubmit' onClick={() => {this.saveFunction();}}>Submit</a>
      </>
    );
  }
}
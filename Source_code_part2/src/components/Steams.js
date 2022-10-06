import './App.css';

import React from "react";

export default class Budget extends React.Component {
    saveFunction() {
        var textToSave = 'TU059 \n==============\n60  61  62';
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
              <td colSpan={3}>TU059</td>
            </tr>
            <tr>
              <td>60</td>
              <td>61</td>
              <td>62</td>
            </tr>
        </table>
        <a href='#' className='finalSubmit' onClick={() => {this.saveFunction();}}>Submit</a>
      </>
    );
  }
}
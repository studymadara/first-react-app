import React, { Component } from 'react';
import './App.css';
import TableCompenent from './components/tableCompenent'; // old code #1st code
import MainCounter from './components/mainCounter';
import {FontAwesomeIcon} from 'font-awesome/css/font-awesome.css';

function App() {
  return (
    <React.Fragment>
      <MainCounter/>

      <TableCompenent/>
    </React.Fragment>
  );
}

export default App;

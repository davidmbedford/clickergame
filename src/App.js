import React from 'react';
import logo from './logo.svg';
import './App.css';

import optionslist from "./components/options";

function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Container>
      <Options>
        {renderOptions()}
      </Options>
    </Container>
    </>
  );
}

export default App;

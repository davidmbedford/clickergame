import React from 'react';
import './App.css';

import Container from './components/Container';
import Header from './components/Header';
import Nav from './components/Nav';
import Options from './components/Options';
import OptionsCard from './components/OptionsCard';
import optionsList from '/components/optionsList'

function App() {


  const shuffleOptionsCards = () => {

  }

  const displayOptions = () => {
    return options.map(character =>
      <OptionsCard key={options.id} isClicked={options.isClicked} name={options.name} image={options.image} onClick={shuffleOptionsCards} />
    )
  }

  return (
    <>
    <Nav/>
    <Header/>
    <Container>
      <Options>
        {displayOptions()}
      </Options>
    </Container>
    </>
  );
}

export default App;

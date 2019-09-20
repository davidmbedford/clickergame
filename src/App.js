import React, {useState} from 'react';
// import './App.css';

import Container from './components/Container';
import Header from './components/Header';
import Nav from './components/Nav';
import Options from './components/Options';
import OptionsCard from './components/OptionsCard';
import optionsList from './components/optionsobject'

function App() {
  const [currentScore, setcurrentScore] = useState(0);
  const [highScore, sethighScore] = useState(0);
  const maxScore = 16;
  const [options, setOptions] = useState(optionsList);
  const [phrase, setPhrase] = useState("Trust your instincts, young padawan!");

  const shuffle = (array) => {
    var currentIndex = array.length, tempVal, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempVal = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempVal;
    }

    return array;
  }
  
  const handleCorrectAnswer = () => {
    if (currentScore + 1 > highScore ){
      sethighScore(highScore + 1)
    }
    if (currentScore + 1 === maxScore) {
      setcurrentScore(currentScore + 1)
      setPhrase("This force is strong in you, Jedi Master");
    } else {
      setcurrentScore(currentScore + 1)
    }
    const miscPhrases = ["Good job, comrade!", "I can feel the force surrounding you", "That was a close shave!"]
    function phraseRandomizer(phrases) {
      return phrases[Math.floor(Math.random() * phrases.length)]
    }
    setPhrase(phraseRandomizer(miscPhrases))
  
  };

  const handleIncorrectAnswer = () => {
    setcurrentScore(0);
    setPhrase("Im sorry, Padawan - but you have much to learn");
    const newOptions = options.map(option => option.isClicked === true ?  {...option, isClicked: false} : option)
    return newOptions;
  }


  const handleShuffleOptions = (name) => {
    let reset = false;
    setOptions(shuffle(options))
    options.map(option => {
      if (option.name === name) {
        if (option.isClicked === false) {
          handleCorrectAnswer();
          return  option.isClicked = true;
        } else {
          reset = true;
          return option.isClicked = false;
        }
      }
      return option;
    })

    if (reset) {
      setOptions(shuffle(handleIncorrectAnswer()));
    }
  }

  const displayOptions = () => {
    return options.map(option =>
      <OptionsCard 
        key={option.id} 
        isClicked={option.isClicked} 
        name={option.name} 
        image={option.image}
        onClick={handleShuffleOptions}  
        />
    )
  }

  return (
    <>
    <Nav currentScore={currentScore} highScore={highScore} />
    <Header phrase={phrase} />
      <Container>
        <Options>
          {displayOptions()}
        </Options>
      </Container>
    </>
  );
}

export default App;

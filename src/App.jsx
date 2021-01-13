import './App.css';
import React from 'react';
import Habits from './components/habits/habits';
import Header from './components/header/header';

class App extends React.Component{
  render(){
    return(
      <>
        <Header />
        <Habits />
      </>
    )
  }
}

export default App;

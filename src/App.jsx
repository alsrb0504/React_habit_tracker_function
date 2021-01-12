import './App.css';
import React from 'react';
import HabitItem from './components/habit_item/habit_item';
import Habits from './components/habits/habits';

class App extends React.Component{
  render(){
    return(
      <>
        <Habits />
      </>
    )
  }
}

export default App;

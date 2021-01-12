import './App.css';
import React from 'react';
import HabitItem from './components/habit_item/habit_item';

class App extends React.Component{
  render(){
    return(
      <>
        <HabitItem />
        <HabitItem />
        <HabitItem />
      </>
    )
  }
}

export default App;

import './App.css';
import React, { useState } from 'react';
import Habits from './components/habits/habits';
import Header from './components/header/header';
import HabitAddForm from './components/habit_add_form/habit_add_form';


const App = (props) => {

  const [habits, setHabits] = useState([
		{
			id: 1,
			habit: 'Reading',
			count: 0,
		},
		{
			id: 2,
			habit: 'Running',
			count: 0,
		},
		{
			id: 3,
			habit: 'Coding',
			count: 0,
		}
	]);

  const addHabits = (new_habits) => {
    setHabits(new_habits);
  }

	const handleIncrease = (habit) =>{
		const updated = habits.map(item => {
			if(item.habit === habit){
				const imsi_item = {...item, count: item.count + 1}
				return imsi_item;
			}
			return item;
		})
		setHabits(updated);
	}

	const handleDecrease = (habit) => {
		const updated = habits.map(item => {
			if(item.habit === habit){
				const count = item.count > 0 ? item.count-1 : 0;
				const imsi_item = {...item, count: count}
				return imsi_item;
			}
			return item;
		})
		setHabits(updated);
	}

	const handleDelete = (habit) => {
		const updated = habits.filter(item=>{
			if(item.habit !== habit){
				return item;
			}
		})
		console.log(updated);
		setHabits(updated);
	}

  
  return(
      <>
        <Header />
        <HabitAddForm 
          habits={habits}
          addHabits={addHabits}
        />
        <Habits 
          habits={habits}
          handleIncrease={handleIncrease} 
          handleDecrease={handleDecrease} 
          handleDelete={handleDelete} 
        />
      </>
  )

  
};

export default App;
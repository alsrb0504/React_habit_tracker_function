import React, { useCallback, useState } from 'react';
import Habits from './components/habits/habits';
import Header from './components/header/header';
import HabitAddForm from './components/habit_add_form/habit_add_form';
import Button from './components/button/button';
import styles from './App.module.css';

const App = () => {

	const [habits, setHabits] = useState([
		{	id: 1,	name: 'Reading',	count: 0,	},
		{	id: 2,	name: 'Running',	count: 0,	},
		{	id: 3,	name: 'Coding',		count: 0,	}
	]);

	const addHabits = (new_habits) => {
		setHabits(new_habits);
	}

	// 선생님 깃헙 코드.
	const handleIncrease = useCallback((habit) =>{
			setHabits(habits =>
				habits.map(item => {
					if (item.id === habit.id) {
						return { ...habit, count: habit.count + 1 };
					}
					return item;
				})
			)	
		}, [])

	// // 내 코드.
	// const handleIncrease = useCallback((habit) =>{
	// 		const updated = habits.map(item => {
	// 			if(item.id === habit.id){
	// 				return {...habit, count: habit.count + 1}
	// 			}
	// 			return item;
	// 		})
	// 		setHabits(updated);
	// }, [habits])



	const handleDecrease = useCallback((habit) => {
		const updated = habits.map(item => {
			if(item.name === habit.name){
				const count = habit.count > 0 ? habit.count -1 : 0;
				return {...item, count: count}
			}
			return item;
		})
		setHabits(updated);
	}, [habits])

	const handleDelete = useCallback((habit) => {
		const updated = habits.filter(item=>{
			return (item.name !== habit.name);
		})
		setHabits(updated);
	}, [habits])

	const handleReset = () => {
		const updated = habits.map(item => {
			if(item.count !== 0 ){
				return {...item, count: 0};
			}
			return item;
		})
		setHabits(updated);
	}

	return(
		<>
			<Header count={habits.length} />
			<HabitAddForm 
				habits={habits}
				addHabits={addHabits}
			/>
			<ul className={styles.ul}>
				<Habits 
					habits={habits}
					handleIncrease={handleIncrease} 
					handleDecrease={handleDecrease} 
					handleDelete={handleDelete} 
					/>
			</ul>
			<Button text="Reset All" handleClick={handleReset} />
		</>
	)

};

export default App;
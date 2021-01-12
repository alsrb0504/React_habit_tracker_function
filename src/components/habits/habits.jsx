import React, { useState } from 'react';
import HabitItem from '../habit_item/habit_item';

const Habits = (props) => {
	
	const [habits, setHabits] = useState([
		{
			id: '1',
			habit: 'Reading',
			count: 0,
		},
		{
			id: '2',
			habit: 'Running',
			count: 0,
		},
		{
			id: '3',
			habit: 'Coding',
			count: 0,
		}
	]);

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

	return (
		// <h1>d</h1>
		habits.map(habit => {
			return (
				<HabitItem
					key={habit.id}
					habit={habit.habit} 
					count={habit.count}
					handleIncrease={handleIncrease}
					handleDecrease={handleDecrease}
					handleDelete={handleDelete}
				/>
			)
		})
	)
}

export default Habits;	
import React from 'react';
import HabitItem from '../habit_item/habit_item';

const Habits = ({habits, handleIncrease, handleDecrease, handleDelete}) => {
	
	
	return (
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
import React from 'react';
import HabitItem from '../habit_item/habit_item';
import styles from './habits.module.css';

const Habits = ({habits, handleIncrease, handleDecrease, handleDelete}) => {
	return (
		habits.map(habit => {
			return (
				<li className={styles.li}>
					<HabitItem
						key={habit.id}
						habit={habit} 
						handleIncrease={handleIncrease}
						handleDecrease={handleDecrease}
						handleDelete={handleDelete}
					/>
				</li>
			)
		})
	)
}

export default Habits;	
import React, { memo, useRef } from 'react';
import Button from '../button/button';
import styles from './habit_add_form.module.css';

const HabitAddForm = memo(({habits, addHabits}) => {
	
	const inputRef = useRef();

	const handleClick = ()=>{
		const value = inputRef.current.value;
		const new_habit = {
			id: habits.length+1,
			name: value,
			count: 0,
		}
		const updated = habits.slice();
		updated.push(new_habit);
		addHabits(updated);
		inputRef.current.value = "";
	}

	return (
		<form>
			<input className={styles.input} placeholder="Habit.." ref={inputRef} type="text"/>
			<Button text="Add" handleClick={handleClick} />
		</form>
	)
})

export default HabitAddForm;
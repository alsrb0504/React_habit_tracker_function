import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './habit_add_form.module.css';

const HabitAddForm = ({habits, addHabits}) => {
	
	const inputRef = useRef();

	const handleClick = (event)=>{
		event.preventDefault();
		const value = inputRef.current.value;
		const new_habit = {
			id: habits.length+1,
			habit: value,
			count: 0,
		}
		const updated = habits.slice();
		updated.push(new_habit);
		addHabits(updated);
		inputRef.current.value = "";
	}

	return (
		<form>
			<input placeholder="Habit.." ref={inputRef} type="text"/>
			{/* <button onClick={handleClick}>Add</button> */}
			<Button text="Add" handleClick={handleClick} />
		</form>
	)
}

export default HabitAddForm;
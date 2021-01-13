import React, { useRef } from 'react';

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
	}

	return (
		<form action="">
			<input ref={inputRef} type="text"/>
			<button onClick={handleClick}>Add</button>
		</form>
	)
}

export default HabitAddForm;
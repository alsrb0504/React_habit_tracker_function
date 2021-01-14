import React, { memo } from 'react';
import styles from './habit_item.module.css';

const HabitItem = memo((props) => {
	const handleIncrease = () => {
		props.handleIncrease(props.habit);
	}

	const handleDecrease = () => {
		props.handleDecrease(props.habit);
	}

	const handleDelete = () => {
		props.handleDelete(props.habit);
	}

	return(
		<div className={styles.container}>
			<p className={styles.habit}>{props.habit.name}</p>
			<span className={styles.count}>{props.habit.count}</span>
			<button onClick={handleIncrease} className={styles.icon}>
				<i className='fas fa-plus-square'></i>
			</button>
			<button onClick={handleDecrease} className={styles.icon}>
				<i  className='fas fa-minus-square'></i>
			</button>

			<button onClick={handleDelete} className={`${styles.icon} ${styles.trash}`}>
				<i  className='fas fa-trash'></i>
			</button>
			
		</div>
	)
})

export default HabitItem;
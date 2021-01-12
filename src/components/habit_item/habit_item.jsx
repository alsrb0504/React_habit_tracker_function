import React from 'react';
import styles from './habit_item.module.css';

const HabitItem = (props) => {

	const handleIncrease = (event) => {
		console.log('increase');
		props.handleIncrease(props.habit);
	}

	const handleDecrease = (event) => {
		console.log('decrease');
		props.handleDecrease(props.habit);
	}

	const handleDelete = (event) => {
		console.log('delete');
		props.handleDelete(props.habit);
	}

	return(
		<div className={styles.container}>
			<p className={styles.habit}>{props.habit}</p>
			<span className={styles.count}>{props.count}</span>
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
}

export default HabitItem;
import React from 'react';
import styles from './habit_item.module.css';

const HabitItem = (props) => {

	// 나중에 각각의 함수에서 const func = increase,drease,delete
	// 를 명시하고 props로 받은 handleClick으로 habit과 func를 넘겨
	// 기능을 수행하도록 해보자.

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
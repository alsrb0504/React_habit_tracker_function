import React from 'react';
import styles from './habit_item.module.css';

const HabitItem = (props) => {
	
	return(
		<div className={styles.container}>
			<p className={styles.habit}>Reading</p>
			<span className={styles.count}>0</span>
			<i className={`${styles.icon} fas fa-plus-square`}></i>
			<i className={`${styles.icon} fas fa-minus-square`}></i>
			<i className={`${styles.icon} ${styles.trash} fas fa-trash`}></i>
		</div>
	)
}

export default HabitItem;
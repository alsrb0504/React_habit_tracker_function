import React from 'react';
import styles from './header.module.css';

const Header = (props) => {

	return (
		<header>
			<i className={`${styles.icon} fas fa-leaf`}></i>
			<span>Habit Tracker</span>
			<span className={styles.count}>3</span>
		</header>
	)
}

export default Header;
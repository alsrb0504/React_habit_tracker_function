import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({count}) => {

	return (
		<header>
			<i className={`${styles.icon} fas fa-leaf`}></i>
			<span>Habit Tracker</span>
			<span className={styles.count}>{count}</span>
		</header>
	)
})

export default Header;
import React, { memo } from 'react';
import styles from './button.module.css';

const Button = memo( ({text, handleClick}) => {

	const ClickEvent = (event)=>{
		event.preventDefault();
		handleClick();
	}

	return(
		<button className={styles.button} onClick={ClickEvent}>{text}</button>
	)
})

export default Button;
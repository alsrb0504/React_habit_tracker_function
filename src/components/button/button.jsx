import React from 'react';
import styles from './button.module.css';

const Button = (props) => {

	const ClickEvent = (event)=>{
		props.handleClick(event);
	}

	return(
		<button className={styles.button} onClick={ClickEvent}>{props.text}</button>
	)
}

export default Button;
import React, { Component } from 'react';
import '../styles.css'

const STYLES = [
	"Btn--dk--outline"
];


const SIZE = [
	"Btn--small",
	"Btn--medium"
];




export const Button = ({
	children,
	type,
	onClick,
    buttonStyle, 
    buttonSize
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) 
	 ? buttonStyle
	 : STYLES[0];

	const checkSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
	return(
		<button 
			className={"Btn m-2 " + checkButtonStyle + " " + checkSize } 
			onClick={onClick} 
			type={type}
		>
			{children}
		</button>
	)
}

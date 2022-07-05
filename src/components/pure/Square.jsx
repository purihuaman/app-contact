import { useState, useRef } from 'react';

import style from './Square.module.scss';

const colorRandom = (setColor) => {
	const randomR = Math.floor(Math.random() * (255 - 0) + 0);
	const randomG = Math.floor(Math.random() * (255 - 0) + 0);
	const randomB = Math.floor(Math.random() * (255 - 0) + 0);

	setColor(`rgb(${randomR}, ${randomG}, ${randomB})`);
};

const Square = () => {
	const squareRef = useRef();
	const [color, setColor] = useState('rgb(0, 0, 0)');

	const mouseOver = () => {
		squareRef.current.style.backgroundColor = color;
	};

	const mouseOut = () => {
		colorRandom(setColor);

		squareRef.current.style.backgroundColor = color;
	};

	const doubleClick = () => {
		squareRef.current.style.backgroundColor = color;
	};

	return (
		<div
			ref={squareRef}
			onMouseOver={() => mouseOver()}
			onMouseOut={() => mouseOut()}
			onDoubleClick={() => {
				doubleClick();
			}}
			className={style.square}
		></div>
	);
};

export default Square;

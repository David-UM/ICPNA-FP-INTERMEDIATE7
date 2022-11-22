import { useState } from 'react';

import './../styles/SmallBox.css';

const SmallBox = ({ name, index, handleBG }) => {
	let [state, setstate] = useState(`SmallBox ${name}`);

	const handleOnClick = () => {
		setstate((state = `SmallBox ${name} grow`));
		handleBG((state = state + ` ${index}`));
	};

	const handleColor = () => {
		handleBG((state = `App ${index}`));
	};

	const makeWhite = () => {
		handleBG((state = `App BGwhite`));
	};

	return (
		<div className='SmallBox-container'>
			<img
				className={state}
				alt={name}
				src={`https://raw.githubusercontent.com/David-UM/ICPNA-FP-INTERMEDIATE7/main/src/assets/NineThings/${name}.jpg`}
				onMouseEnter={handleColor}
				onMouseLeave={makeWhite}
				onClick={handleOnClick}
			/>
		</div>
	);
};

export default SmallBox;

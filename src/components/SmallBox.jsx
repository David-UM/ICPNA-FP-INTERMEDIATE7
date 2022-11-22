import { useState } from 'react';

import './../styles/SmallBox.css';

const SmallBox = ({ name, color }) => {
	let [state, setstate] = useState(`SmallBox ${name}`);

	const handleOnClick = () => {
		setstate((state = `SmallBox ${name} grow`));
		() => (document.body.style.backgroundColor = '#faf');
	};
	console.log();
	return (
		<div className='SmallBox-container'>
			<img
				className={state}
				alt={name}
				src={`https://raw.githubusercontent.com/David-UM/ICPNA-FP-INTERMEDIATE7/main/src/assets/NineThings/${name}.jpg`}
				onMouseEnter={() => (document.body.style.backgroundColor = color)}
				onMouseLeave={() => (document.body.style.backgroundColor = '#fff')}
				onClick={handleOnClick}
			/>
		</div>
	);
};

export default SmallBox;

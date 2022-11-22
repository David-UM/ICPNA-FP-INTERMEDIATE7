import SmallBox from './SmallBox';
import './../styles/BigBox.css';
import data from './../data/data.js';
import { useState } from 'react';

const BigBox = ({ handleBG }) => {
	console.log(data[0].name);
	const [color, setColor] = useState('#000');

	const handleOnChange = e => {};
	document.body.style.backgroundColor = color;
	return (
		<>
			<div className='BigBox'>
				{data.map(img => (
					<SmallBox
						handleBG={handleBG}
						name={img.name}
						key={img.index}
						index={img.index}
					/>
				))}
			</div>
		</>
	);
};

export default BigBox;

import SmallBox from './SmallBox';
import './../styles/BigBox.css';
import data from './../data/data.js';
import { useState } from 'react';

const BigBox = ({ handleBG, estado }) => {
	return (
		<>
			<div className='BigBox'>
				{data.map(img => (
					<SmallBox
						handleBG={handleBG}
						estado={estado}
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

import { useState } from 'react';

import './../styles/SmallBox.css';

const SmallBox = ({ name, index, handleBG, estado }) => {
	let [imgclass, setImgclass] = useState(`SmallBox ${name}`);
	let [containerclass, setContainerclass] = useState(`SmallBox-container`);

	const handleOnClick = () => {
		setImgclass((imgclass = `SmallBox ${name} grow`));
		handleBG((estado = estado + ` ${index}`));
		setContainerclass(
			(containerclass = `SmallBox-container grow-container ${index}`)
		);
	};

	const handleColor = () => {
		handleBG((estado = `App ${index}`));
	};

	const makeWhite = () => {
		handleBG((estado = `App BGwhite`));
	};

	return (
		<div className={containerclass}>
			<img
				className={imgclass}
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

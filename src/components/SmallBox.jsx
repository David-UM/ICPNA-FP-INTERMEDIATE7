import { useState } from 'react';

import './../styles/SmallBox.css';

const SmallBox = ({ name, index, handleBG, estado }) => {
	let [imgclass, setImgclass] = useState(`SmallBox ${name}`);
	let [containerclass, setContainerclass] = useState(`SmallBox-container`);
	let [buttonclass, setButtonclass] = useState(`boton`);

	const handleOnClick = () => {
		setImgclass((imgclass = `SmallBox ${name} grow`));
		handleBG((estado = estado + ` ${index}`));
		setContainerclass(
			(containerclass = `SmallBox-container grow-container ${index}`)
		);
		setButtonclass((setButtonclass = `boton show`));
	};

	const handleColor = () => {
		handleBG((estado = `App ${index}`));
	};

	const makeWhite = () => {
		handleBG((estado = `App BGwhite`));
	};

	const handleClose = () => {
		setImgclass((imgclass = `SmallBox ${name}`));
		handleBG((estado = `App`));
		setContainerclass((containerclass = `SmallBox-container`));
		setButtonclass((setButtonclass = `boton`));
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
			<button className={buttonclass} onClick={handleClose}>
				X
			</button>
		</div>
	);
};

export default SmallBox;

import './../styles/SmallBox.css';

const SmallBox = ({ name, color }) => {
	return (
		<>
			<img
				className={`SmallBox ${name}`}
				alt={name}
				src={`https://raw.githubusercontent.com/David-UM/ICPNA-FP-INTERMEDIATE7/main/src/assets/NineThings/${name}.jpg`}
				onMouseEnter={() => (document.body.style.backgroundColor = color)}
				onMouseLeave={() => (document.body.style.backgroundColor = '#fff')}
			/>
		</>
	);
};

export default SmallBox;

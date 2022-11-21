import './../styles/SmallBox.css';

const SmallBox = ({ name }) => {
	return (
		<>
			<img
				className={`SmallBox ${name}`}
				alt={name}
				src={`https://raw.githubusercontent.com/David-UM/ICPNA-FP-INTERMEDIATE7/main/src/assets/NineThings/${name}.jpg`}
			/>
		</>
	);
};

export default SmallBox;

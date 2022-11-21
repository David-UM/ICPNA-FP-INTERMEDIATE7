import SmallBox from './SmallBox';
import './../styles/BigBox.css';
import data from './../data/data.js';

const BigBox = () => {
	console.log(data[0].name);
	return (
		<>
			<div className='BigBox'>
				{data.map(img => (
					<SmallBox name={img.name} key={img.name} />
				))}
			</div>
		</>
	);
};

export default BigBox;

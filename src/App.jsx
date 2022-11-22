import './App.css';
import { useState } from 'react';
import BigBox from './components/BigBox';

function App() {
	let [state, setstate] = useState(`App`);

	return (
		<div className={state}>
			<BigBox></BigBox>
		</div>
	);
}

export default App;

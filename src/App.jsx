import './App.css';
import { useState } from 'react';
import BigBox from './components/BigBox';

function App() {
	let [state, setState] = useState(`App`);
	return (
		<div className={state}>
			<BigBox handleBG={setState} estado={state}></BigBox>
		</div>
	);
}

export default App;

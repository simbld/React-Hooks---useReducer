import './App.css';
import { useReducer } from 'react';

const initialState = 0;

function reducer(state, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="App">
			<h1>Counter with useReducer</h1>
			<h1>{state}</h1>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
		</div>
	);
}

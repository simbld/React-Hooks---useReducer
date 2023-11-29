import './App.css';
import { useReducer } from 'react';

const initialState = {
	counter: 0,
	step: 1,
};

function reducer(state, action) {
	switch (action.type) {
		case 'INCREMENT':
			return { counter: state.counter + 1 };
		case 'DECREMENT':
			return { counter: state.counter - 1 };
		default:
			return state;
	}
}

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="App">
			<h1>Counter with useReducer</h1>
			<h1>{state.counter}</h1>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
		</div>
	);
}

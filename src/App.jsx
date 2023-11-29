import { useReducer } from 'react';

const initialState = {
	counter: 0,
	step: 1,
};

function reducer(state, action) {
	switch (action.type) {
		case 'INCREMENT':
			return { ...state, counter: state.counter + state.step };
		case 'DECREMENT':
			return { ...state, counter: state.counter - state.step };
		case 'INCREMENT_STEP':
			return { ...state, step: state.step + 1 };
		case 'DECREMENT_STEP':
			return { ...state, step: state.step - 1 };
		default:
			return state;
	}
}

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="App">
			<h1>Counter with useReducer</h1>
			<h2>{state.counter}</h2>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
			<h3>{state.step}</h3>
			<button onClick={() => dispatch({ type: 'INCREMENT_STEP' })}>
				Incrémenter le pas
			</button>
			<button onClick={() => dispatch({ type: 'DECREMENT_STEP' })}>
				Décrémenter le pas
			</button>
		</div>
	);
}

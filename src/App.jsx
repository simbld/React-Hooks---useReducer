import { useReducer } from 'react';
import reducer from './reducers/CounterReducer';
import {
	INCREMENT,
	DECREMENT,
	INCREMENT_STEP,
	DECREMENT_STEP,
} from './actions/CounterActions';

const initialState = {
	counter: 0,
	step: 1,
};

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="App">
			<h1>Counter with useReducer</h1>
			<h2>{state.counter}</h2>
			<button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
			<button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
			<h3>{state.step}</h3>
			<button onClick={() => dispatch({ type: INCREMENT_STEP })}>
				Incrémenter le pas
			</button>
			<button onClick={() => dispatch({ type: DECREMENT_STEP })}>
				Décrémenter le pas
			</button>
		</div>
	);
}

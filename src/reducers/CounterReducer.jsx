import {
	INCREMENT,
	DECREMENT,
	INCREMENT_STEP,
	DECREMENT_STEP,
} from '../actions/CounterActions';

export default function reducer(state, action) {
	switch (action.type) {
		case INCREMENT:
			return { ...state, counter: state.counter + state.step };
		case DECREMENT:
			return { ...state, counter: state.counter - state.step };
		case INCREMENT_STEP:
			return { ...state, step: state.step + 1 };
		case DECREMENT_STEP:
			return { ...state, step: state.step - 1 };
		default:
			return state;
	}
}

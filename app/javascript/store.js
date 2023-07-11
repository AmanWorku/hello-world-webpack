import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Define action types
const SET_GREETING = "SET_GREETING";

// Define actions
export const setGreeting = (greeting) => {
	return {
		type: SET_GREETING,
		payload: greeting,
	};
};

// Define reducer
const reducer = (state = "", action) => {
	switch (action.type) {
		case SET_GREETING:
			return action.payload;
		default:
			return state;
	}
};

// Create store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";

import PomodoroClock from "./PomodoroClock";

const createStoreWithMiddleware = applyMiddleware()(createStore);
const initialState = {
	input: { session: 25, break: 5 },
	timer: { pause: false, stop: true }
};

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers, initialState)}>
		<PomodoroClock />
	</Provider>,
	document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import PomodoroClock from "./PomodoroClock";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);
const initialState = {
	input: { session: 25, break: 5 }
};

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers, initialState)}>
		<PomodoroClock />
	</Provider>,
	document.getElementById("root")
);

export default function(state = {}, action) {
	switch (action.type) {
		case "PAUSE":
			return {
				...state,
				pause: state.pause ? false : true
			};

		case "RESET":
			return {
				...state,
				stop: true,
				pause: false
			};

		default:
			return state;
	}
}

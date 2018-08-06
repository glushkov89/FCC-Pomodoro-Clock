export default function(state = {}, action) {
	switch (action.type) {
		case "SESSION_INC":
			if (state.session < 60) {
				return {
					...state,
					session: state.session + action.payload
				};
			} else {
				return state;
			}
		case "SESSION_DEC":
			if (state.session > 1) {
				return {
					...state,
					session: state.session + action.payload
				};
			} else {
				return state;
			}
		case "BREAK_INC":
			if (state.break < 60) {
				return {
					...state,
					break: state.break + action.payload
				};
			} else {
				return state;
			}
		case "BREAK_DEC":
			if (state.break > 1) {
				return {
					...state,
					break: state.break + action.payload
				};
			} else {
				return state;
			}
		default:
			return state;
	}
}

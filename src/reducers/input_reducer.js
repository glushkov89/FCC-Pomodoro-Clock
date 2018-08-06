export default function(state = {}, action) {
	switch (action.type) {
		case "SESSION_INC":
			if (state.input.session < 60) {
				return { ...state, session: state.input.session + action.payload };
			} else {
				return state;
			}
		case "SESSION_DEC":
			if (state.input.session > 1) {
				return { ...state, session: state.input.session + action.payload };
			} else {
				return state;
			}
		case "BREAK_INC":
			if (state.input.break < 60) {
				return { ...state, break: state.input.break + action.payload };
			} else {
				return state;
			}
		case "BREAK_DEC":
			if (state.input.break > 1) {
				return { ...state, break: state.input.break + action.payload };
			} else {
				return state;
			}
		default:
			return state;
	}
}

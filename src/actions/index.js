export function increaseSession() {
	return {
		type: "SESSION_INC",
		payload: 1
	};
}
export function decreaseSession() {
	return {
		type: "SESSION_DEC",
		payload: -1
	};
}

export function increaseBreak() {
	return {
		type: "BREAK_INC",
		payload: 1
	};
}

export function decreaseBreak() {
	return {
		type: "BREAK_DEC",
		payload: -1
	};
}

export function togglePause() {
	return {
		type: "PAUSE",
		payload: null
	};
}

export function reset() {
	return {
		type: "RESET",
		payload: null
	};
}

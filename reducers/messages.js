
const messages = (state = [], action) => {
	// return index of action's message within state
	const messageIndex = () => {
		return state.findIndex(thisMessage => {
			return thisMessage && thisMessage.id === action.message.id;
		});
	};

	switch(action.type) {
		case 'insert':
			// append message at end if not already found in state
			return messageIndex() < 0 ? [...state, action.message] : state;

		default:
			return state;
	}
};

export default messages;

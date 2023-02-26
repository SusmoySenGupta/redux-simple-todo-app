import { COLOR_CHANGED, STATUS_CHANGED } from './actionTypes';
import { initialState } from './initialState';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case COLOR_CHANGED: {
			const { color, changeType } = action.payload;
			switch (changeType) {
				case 'added': {
					return {
						...state,
						color: [...state.color, color],
					};
				}
				case 'removed': {
					return {
						...state,
						color: state.color.filter(
							(existingColor) => existingColor !== color
						),
					};
				}
				default:
					return state;
			}
		}
		case STATUS_CHANGED: {
			return {
				...state,
				status: action.payload,
			};
		}
		default:
			return state;
	}
};

export default reducer;

import {
	ADDED,
	ALL_COMPLETED,
	CLEAR_COMPLETED,
	COLOR_SELECTED,
	DELETED,
	TOGGLED,
} from './actionTypes';
import initialState from './initialState';

const nextTodoID = (todos) => {
	const maxID = todos.reduce((maxID, todo) => Math.max(todo.id, maxID), -1);
	return maxID + 1;
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDED: {
			return [
				...state,
				{
					id: nextTodoID(state),
					text: action.payload,
				},
			];
		}
		case ALL_COMPLETED: {
			return state.map((todo) => {
				return {
					...todo,
					completed: true,
				};
			});
		}
		case CLEAR_COMPLETED: {
			return state.filter((todo) => !todo.completed);
		}
		case COLOR_SELECTED: {
			const { todoId, color } = action.payload;
			return state.map((todo) => {
				if (todo.id !== todoId) {
					return todo;
				}
				return {
					...todo,
					color,
				};
			});
		}
		case DELETED: {
			return state.filter((todo) => todo.id !== action.payload);
		}
		case TOGGLED: {
			return state.map((todo) => {
				if (todo.id !== action.payload) {
					return todo;
				}
				return {
					...todo,
					completed: !todo.completed,
				};
			});
		}
		default:
			return state;
	}
};

export default reducer;

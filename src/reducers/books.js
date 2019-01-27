import {INCREMENT_LIKES} from '../actions/actionCreators';

const bookReducers = (state = {}, action) => {
	switch (action.type) {
		case INCREMENT_LIKES:
			let newState = { ...state };
			newState[action.id].likes = newState[action.id].likes + 1;
			return newState;
		default: 
			return state
	}
}

export default bookReducers;
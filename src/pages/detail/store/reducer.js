import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

//fromJS将其转换成了immutable对象
const defaultState = fromJS({
	id: '',
	title: '',
	imgUrl: '',
	content: ''
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.ADD_DETAIL_LIST:
			return state.merge({
				id: action.id,
				title: action.title,
				imgUrl: action.imgUrl,
				content: action.content
			});
		default:
			return state;
	}
}
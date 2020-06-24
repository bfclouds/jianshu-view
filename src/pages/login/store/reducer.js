import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

//fromJS将其转换成了immutable对象
const defaultState = fromJS({
	loginState: false,
	userEmail: '834298507@QQ.COM',
	userName: '',
	region: '',
	avatar: '',
	token: ''
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.CHANGE_LOGIN_STATION:
			console.log("登录成功");
			return state.merge({
				loginState: true,
				userEmail: fromJS(action.userEmail),
				userName: fromJS(action.userName),
				region: fromJS(action.region),
				avatar: fromJS(action.avatar),
				token: fromJS(action.token)
			});
		case actionTypes.CHANGE_LOGOUT_STATION:
			return state.merge({
				loginState: false,
				userEmail: action.set(''),
				loginToken: action.set('')
			});
		default:
			return state;
	}
}
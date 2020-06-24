import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';


const changeList = (data) => ({
	type: actionTypes.CHANGE_LIST,
	data: fromJS(data),		//将普通数组变成immutable的数组
	totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
	type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: actionTypes.SEARCH_BLUR,
});

export const getItemList = () => {
	return (dispatch) => {
		axios.get('http://regional.bfclouds.cn/list/test').then((res) => {
			const data = res.data;
			dispatch(changeList(data.data));
		}).catch((res) => {
			console.log("请稍后再试");
		});
	}
};

export const mouseEnter = () => ({
	type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: actionTypes.MOUSE_LEAVE
});

export const changePage =(page) => ({
	type: actionTypes.CHANGE_PAGE,
	page
})
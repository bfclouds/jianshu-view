import axios from 'axios';
import { actionTypes } from './index';
import { fromJS } from 'immutable';

const setDetailInfo = (data)=> {
	return {
		type: actionTypes.ADD_DETAIL_LIST,
		id: data.get('id'),
		title: data.get('title'),
		imgUrl: data.get('imgUrl'),
		content: data.get('content')	
	}
	
};

export const getDetailList = (detailId) => {
	return (dispatch) => {
		axios.get('/api/detail.json').then((res) => {
			const result = res.data.detail_info;
			dispatch(setDetailInfo(fromJS(result)));
		}).catch((res) => {
			console.log("详情细心获取失败");
		});
	}
};
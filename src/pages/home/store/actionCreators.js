import axios from 'axios';
import { actionTypes } from './index';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
	type: actionTypes.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});

const addArticleList = (articleList, articlePage) => ({
	type: actionTypes.ADD_ARTICLE_LIST,
	articleList: fromJS(articleList),
	articlePage: articlePage
})

export const getHomeList = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changeHomeData(result));
		}).catch((res) => {
			console.log('获取数据失败');
		})
	};
};

export const getMoreList = (articlePage) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + articlePage).then((res) => {
			const result = res.data.list;
			dispatch(addArticleList(result, articlePage + 1));
		}).catch((res) => {
			console.log('获取更多数据失败');
		});
	}
};

export const changeScrollShow = (show) => ({
	type: actionTypes.SCROLL_SHOW,
	show
});
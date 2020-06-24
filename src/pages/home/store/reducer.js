import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

//fromJS将其转换成了immutable对象
const defaultState = fromJS({
	topicList: [],
	articleList:[],
	recommendList:[],
	articlePage: 1,
	scrollShow: false
});

const changeHomeDta = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	});
}

const addArticleList = (state, action) => {
	return state.merge({
		articleList: state.get('articleList').concat(action.articleList),	//concat，追加
		articlePage: action.articlePage
	});
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.CHANGE_HOME_DATA:
			return changeHomeDta(state, action);
		case actionTypes.ADD_ARTICLE_LIST:
			return addArticleList(state, action);
		case actionTypes.SCROLL_SHOW:
			return state.set('scrollShow', action.show);
		default:
			return state;
	}
}
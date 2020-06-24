import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
	handleScrollTop() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<HomeWrapper >
				<HomeLeft>
					<img 
						className="banner-img" 
						src='https://upload.jianshu.io/admin_banners/web_images/4815/f472c99bab23664f1bd73eaefcdd6b3931526077.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' 
						alt=''
					/>
					<Topic></Topic>
					<List></List>
				</HomeLeft>
				<HomeRight>
					<Recommend></Recommend>
					<Writer></Writer>
				</HomeRight>
				{this.props.scrollShow ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
				
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	componenttWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollShow);
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollShow);
	}
}

const mapStateToProps = (state) => ({
	scrollShow: state.getIn(['home', 'scrollShow'])
});

const mapDispatchToProps = (dispatch) => {
	return {
		changeHomeData() {
			const action = actionCreators.getHomeList();
			dispatch(action);
		},
		changeScrollShow() {
			if(document.documentElement.scrollTop > 100) {
				const action = actionCreators.changeScrollShow(true);
				dispatch(action);
			}else {
				const action = actionCreators.changeScrollShow(false);
				dispatch(action);
			}
			
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
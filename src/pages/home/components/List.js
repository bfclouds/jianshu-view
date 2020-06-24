import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListInfo, ListItem, LoadMore } from '../style';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

class List extends Component {
	render() {
		const { articleList, getMoreList, articlePage } = this.props;
		return (
			<div>
				{
					articleList.map((item, index) => (
						<Link key={index} to={'/detail/' + item.get('id')}>
							<ListItem key={item.get('id')}>
								<img className='list-pic' src={item.get('imgUrl')} alt=''/>
								<ListInfo>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='desc'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						</Link>
					))
				}
				<LoadMore
					onClick = {() => getMoreList(articlePage)}
				>
					加载更多
				</LoadMore>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	articleList: state.getIn(['home', 'articleList']),
	articlePage: state.getIn(['home', 'articlePage']),
});

const mapDispatchToProps = (dispatch) => {
	return {
		getMoreList(articlePage) {
			dispatch(actionCreators.getMoreList(articlePage));
		}
	}
	
};


export default connect(mapStateToProps, mapDispatchToProps)(List);
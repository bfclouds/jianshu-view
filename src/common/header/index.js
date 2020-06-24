import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
 			Logo, Nav, NavItem, NavSearch, HeaderWrapper, SearchInfoSwitch, 
			Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoItem
		} from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';


class Header extends Component {
	getListArea() {
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS();
		const pageList = [];
		var len = page * 10 < newList.length ? page * 10 : newList.length;
		if (newList.length) {
			for (var i = (page-1) * 10; i < len; i++) {
				pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
			}	
		}
		
		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter = {handleMouseEnter}
					onMouseLeave = {handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch
							onClick = {() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							<i ref = {(icon) => (this.spinIcon = icon)} className="iconfont spin">&#xe61e;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<div>
						{pageList}
					</div>
				</SearchInfo>
			);
		}else {
			return null;
		}
	}

	render() {
		const { focused, list, userEmail, loginState, handleInputFocus, handleInputBlur, startLogout } = this.props;
		return (
			<HeaderWrapper>
				<Logo href='/' />
				<Addition>
					<Link to='/write'>
						<Button className='writting'>
							<i className="iconfont">&#xe604;</i>写文章
						</Button>
					</Link>
					{<Link to='/register'><Button className="reg">注册</Button></Link>}
					{
						loginState ? <NavItem className="right" onClick={() => startLogout(userEmail)}>退出</NavItem> : 
						<Link to='/login'><NavItem className="right">登录</NavItem></Link>
					}
					
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>	
				</Addition>
				<Nav>
					{
						<Link to="/home">
							<NavItem  className="left active">首页</NavItem>
						</Link>
					}
					<NavItem className="left">关于网站</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={500}
							classNames="slide"
						>
							<NavSearch 
								className={focused ? 'focused' : ''}
								onFocus = {() => handleInputFocus(list)}
								onBlur = {handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont abs-position' : 'iconfont abs-position'}>&#xe848;</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
			</HeaderWrapper>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header','totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		loginState: state.getIn(['login','loginState']),
		userEmail: state.getIn(['login','userEmail']),
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getItemList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if(originAngle) {
				originAngle = parseInt(originAngle, 10); 	//以十进制转换为数字
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 180) + 'deg)';
			console.log(spin.style.transform);
			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else {
				dispatch(actionCreators.changePage(1));
			}
		},
		startLogout(userEmail) {
			let action = actionCreators.srartLogout(userEmail);
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
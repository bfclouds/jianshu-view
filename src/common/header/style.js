import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
	position: relative;
    right: 0;
    left: 0;
	min-width: 902px;
	max-width: 1440px;
	height: 58px;
	margin: 0 auto;
	border-bottom: 1px soild #fofofo;
`;

//.attrs表示a标签所具有的属性
export const Logo = styled.a.attrs({
	href: '/'
})`
	display: block;
	float: left;
	width: 100px;
	height:56px;
	border-bottom: 1px solid $f0f0f0;
	background: url(${logoPic}) center/contain;
`;

export const Nav = styled.div`
	float: left;
	min-width: 400px;
	height: 100%;
	margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
`;

export const NavItem = styled.div`
	font-size: 17px;
	padding: 0 15px;
	line-height:56px;
	color: #333;
	cursor:pointer;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: rgb(234,112,91);
	}
`;

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.abs-position {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		border-radius:50%;
		line-height: 30px;
		text-align: center;
		&.focused {
			background-color: #777;
			color:#fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: "搜索"
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin: 9px 0 0 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background-color: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}

	&.focused {
		width:250px;
	}
	&.slide-enter {
		transition: all .5s ease-out;
	}
	&.slide-enter-active {
		width: 250px;
	}
	&.slide-exit {
		transition: all .5s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

//热门搜索布局
export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top:  56px;
	width: 240px;
	padding: 0 20 px;
	box-shadow: 0 0 8px raba(0,0,0,.2);
	border: 1px solid #ccc;
	background-color: #fff;
	z-index:10;
`;

//热门搜索里列表标题
export const SearchInfoTitle = styled.div`
	margin: 15px 10px 10px 10px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

//热门搜索切换
export const SearchInfoSwitch = styled.div`
	float: right;
	font-size: 13px;
	cursor:pointer;
	.spin {
		display: block;
		float: left;
		font-size: 18px;
		margin-right: 5px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

//热门搜索item内容
export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	margin: 3px 5px 5px 10px;
	line-height: 20px;
	padding: 0 5px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
	cursor:pointer;
`

export const Addition = styled.div`
	float: right;
	height: 56px;
`;

export const Button = styled.div`
	float: right;
	margin: 10px 20px 0 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	cursor:pointer;  //小手
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background-color: #ec6149;
	}
`;



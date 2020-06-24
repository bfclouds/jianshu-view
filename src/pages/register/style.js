import styled from 'styled-components';

export const LoginWarpper = styled.div`
	position: absolute;
	top: 150px;
	left: 0;
	right: 0;
	margin: 0 auto;
	width: 400px;
	height: 580px;
	border: 1px solid #ccc;
`;

export const SelectArea = styled.div`
	margin: 0 auto 50px;
	padding: 60px 30px 10px 30px;
	font-weight: 400;
	color: #969696;
	font-size: 18px;
	text-align: center;
	p{
		display: inline;
	}
`;

export const SlelectSwitch = styled.h3`
	display: inline;
	margin: 0 30px 10px 30px;
	color: #969696;
	cursor: pointer;
`;

export const InputArea = styled.div`
	position: relative;
	.abs-position {
    	position: absolute;
		left: 60px;
		top: 22px;
    }
`;

export const LoginInput = styled.input`
	display: block;
	width: 250px;
    height: 50px;
    margin: 0 auto;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    outline:none;
    &.top {
    	border-radius: 4px 4px 0 0;
    }
    &.middle {
        border-bottom: 0;
    }
  	&.bottom {
    	border-radius: 0 0 4px 4px;
    	margin-bottom: 35px;
    }  
`;

export const LoginButtom = styled.div`
	width: 250px;
	margin: 15px auto;
    padding: 9px 18px;
    font-size: 18px;
    text-align: center;
    border: none;
    border-radius: 25px;
    color: #fff;
    
    cursor: pointer;
    outline: none;
    display: block;
    clear: both; 
    &.login_buttom {
    	background: #7cb0fd;
    }
    &.code_buttom{
    	background-color: #fbe6c0;
    }
`;
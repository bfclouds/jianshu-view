import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { LoginWarpper, LoginInput, SlelectSwitch, SelectArea, InputArea, LoginButtom } from './style';
import { actionCreators } from './store';

class Login extends Component {
	render() {
		const { sendCode, startLogin, loginState } = this.props;
		if (!loginState) {
			return (
				<LoginWarpper>
					<SelectArea>
						{<Link to="/login"><SlelectSwitch>登录</SlelectSwitch></Link>}
							<p>·</p>
						{<Link to="/register"><SlelectSwitch>注册</SlelectSwitch></Link>}
					</SelectArea>
					<InputArea>
						<i className="iconfont abs-position">&#xe60c;</i>
						<LoginInput className="top middle" ref={(input) => (this.email=input)} placeholder="请输入您的邮箱"/>
					</InputArea>
					<InputArea>
						<i className="iconfont abs-position">&#xe63d;</i>
						<LoginInput type="password" className="middle" ref={(input) => (this.password=input)} placeholder="请输入您的密码" />
					</InputArea>
					<InputArea>
						<i className="iconfont abs-position">&#xe63d;</i>
						<LoginInput type="password" className="middle" ref={(input) => (this.rePassword=input)} placeholder="重复您的密码" />
					</InputArea>
					<InputArea>
						<i className="iconfont abs-position">&#xe62b;</i>
						<LoginInput className="bottom" ref={(input) => (this.valCode=input)} placeholder="请输入验证码" />
					</InputArea>
					<LoginButtom 
						className="login_buttom"
						onClick={() => startLogin(this.email, this.password, this.rePassword, this.valCode)}
					>
						注冊
					</LoginButtom>
					<LoginButtom 
						className="code_buttom"
						onClick={() => sendCode(this.email)}
					>
						发送验证码
					</LoginButtom>
				</LoginWarpper>
			);
		}else {
			return  <Redirect to='./' />
		}
		
	}
}

const mapStateToProps = (state) => ({
	loginState: state.getIn(['login','loginState']),
});

const mapDispatchToProps = (dispatch) => {
	return {
		sendCode(email) {
			let action = actionCreators.sendCodeToEmail(email.value);
		},
		startLogin(email, password, rePassword, valCode) {
			if (password === rePassword) {
				return alert("两次输入的密码不一致");
			}
			let action = actionCreators.srartLogin(email.value, password.value, valCode.value);
			dispatch(action);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
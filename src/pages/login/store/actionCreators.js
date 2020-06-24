import axios from 'axios';
import { actionTypes } from './index';

const setLoginAction = (result) => ({
	type: actionTypes.CHANGE_LOGIN_STATION,
	userEmail: result.email,
	userName: result.userName,
	region: result.region,
	avatar: result.avatar,
	token: result.token
});

const setLogoutAction = () => ({
	type:  actionTypes.CHANGE_LOGOUT_STATION
});


export const sendCodeToEmail = (email) => {
	return (
		axios.get('http://regional.bfclouds.cn/user/send_code?userEmail=' + email).then((res) => {
			if(res.data.errno === 10000) {
				alert("验证码发送成功，请注意查收");
			}
			if(res.data.errno === 20040) {
				alert("验证码发送次数过多，一分钟后再试")	
			}
			if (res.data.errno === 40002) {
				alert("请正确填写表单")		
			}
		}).catch((res) => {
			alert("验证码发送失败，请稍后再试")
		})
	)
};

export const srartLogin = (email, password, valCode) => {
	return (dispatch) => {
		let requestData = {
			'userEmail': email,
			'password': password,
			'captcha': valCode
		}
		axios.post('http://regional.bfclouds.cn/user/login', requestData).then((res) => {
			if(res.data.errno === 10000) {
				dispatch(setLoginAction(res.data.data));
			}
		}).catch((res) => {
			console.log(res)
		});
	}
}

export const changeScrollShow = (show) => ({
	type: actionTypes.SCROLL_SHOW,
	show
});

export const srartLogout = (email) => {
	return (dispatch) => {
		let requestData = {
			'userEmail': email
		}
		console.log(requestData);
		axios.post('http://regional.bfclouds.cn/user/logout', requestData).then((res) => {
			if(res.data.errno === 10000) {
				dispatch(setLogoutAction());
			}
		}).catch((res) => {
			console.log(res)
		});
	}
}
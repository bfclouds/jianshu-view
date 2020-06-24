import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends Component {
	render() {
		const { loginState } = this.props;
		if(loginState) {
			return (
				<div>写文章</div>
			);		
		}else {
			return <Redirect to="/login" />
		}
		
	}
}

const mapStateToProps = (state) => ({
	loginState: state.getIn(['login', 'loginState'])
})

export default connect(mapStateToProps, null)(Write);
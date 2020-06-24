import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends Component {
	render() {
		const { title, imgUrl, content } = this.props;
		return (
			<DetailWrapper>
				<Header>{title}</Header>
					<Content>
					<img src={imgUrl} alt="" />
					<p>{content}</p>
				</Content>
			</DetailWrapper>
		)
	}

	componentDidMount() {
		this.props.getDetailList(this.props.match.params.id);
		console.log(this.props.content)
	}
}

const mapStateToProps = (state) => ({
	// id: state.getIn(['datail', 'title']),
	title: state.getIn(['detail', 'title']),
	imgUrl: state.getIn(['detail', 'imgUrl']),
	content: state.getIn(['detail', 'content'])
	
});

const mapDispatchToProps = (dispatch) => ({
	getDetailList(detailId) {
		dispatch(actionCreators.getDetailList(detailId));
	}	
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
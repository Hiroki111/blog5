import React from 'react';
import {
	connect
}
from 'react-redux';
import {
	Link
}
from 'react-router-dom';
import axios from 'axios';
import Form from './form';
import styles from './styles';
import {
	SubmissionError,
	getFormValues
}
from 'redux-form';
import {
	addPost,
	addPostFulfilled,
	addPostRejected,
	getPost,
	getPostFulfilled,
	getPostRejected,
	updatePost,
	updatePostFulfilled,
	updatePostRejected,
	resetPost
}
from '../../actions/postActions';
import {
	notify
}
from 'react-notify-toast';

class PostEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		const id = this.props.match.params.postId;

		if (!id)
			this.props.resetPost();
		else
			this.props.getPost(Number(id));
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.Form && nextProps.Form.title) {
			this.setState({
				url: nextProps.Form.title.replace(/[^a-zA-Z0-9]/g, '-')
			});
		}
	}

	handleSubmit(data, push) {
		data.active = (data.active) ? 1 : 0;
		data.url = this.state.url;
		if (!data.hasOwnProperty("id"))
			return this.props.addPost(data, push);
		else
			return this.props.updatePost(data.id, data, push);
	}

	render() {
		const {
			push
		} = this.props.history;
		return (<Form onSubmit={data=> this.handleSubmit(data, push)} url={this.state.url} />);
	}
}

const mapStateToProps = (state) => {
	return {
		Form: getFormValues('Form')(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPost: (id) => {
			dispatch(getPost(id)).data.then((result) => {
				dispatch(getPostFulfilled(result.data));
			}).catch((error) => {
				dispatch(getPostRejected(error));
			})
		},
		addPost: (data, push) => {
			return dispatch(addPost(data)).data.then((result) => {
				notify.show('Saved', 'success', 3000);
				dispatch(addPostFulfilled(result.data));
				push('/posts');
			}).catch((error) => {
				dispatch(addPostRejected());
				var messages = Object.keys(error.response.data).map(key => error.response.data[key]);
				throw new SubmissionError({
					_error: messages
				});
			});
		},
		updatePost: (id, data, push) => {
			return dispatch(updatePost(id, data)).data.then((result) => {
				notify.show('Saved', 'success', 3000);
				dispatch(updatePostFulfilled(result.data));
				push('/posts');
			}).catch((error) => {
				dispatch(updatePostRejected(error));
				var messages = Object.keys(error.response.data).map(key => error.response.data[key]);
				throw new SubmissionError({
					_error: messages
				});
			});

		},
		resetPost: () => {
			dispatch(resetPost());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);
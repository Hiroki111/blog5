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
	SubmissionError
}
from 'redux-form';
import {
	addPost,
	addPostFulfilled,
	addPostRejected,
	getPost,
	updatePost,
	updatePostRejected,
	resetPost
}
from '../../actions/postActions';
import {
	notify
}
from 'react-notify-toast';

@connect((store) => {
	return {
		post: store.post.post
	};
})
export default class EditingPost extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillMount() {
		const id = this.props.match.params.postId;

		if (id)
			this.props.dispatch(getPost(Number(id)));
		else
			this.props.dispatch(resetPost());
	}

	onSubmit(data) {
		data.active = (data.active) ? 1 : 0;
		if (!data.hasOwnProperty("id")) {
			return this.props.dispatch(addPost(data)).data.then((result) => {
				notify.show('Saved', 'success', 2000);
				this.props.dispatch(addPostFulfilled(result.data));
				this.props.history.push('/posts')
			}).catch((error) => {
				this.props.dispatch(addPostRejected());
				var messages = Object.keys(error.response.data).map(key => error.response.data[key]);
				throw new SubmissionError({
					_error: messages
				});
			});
		}
	}

	render() {
		return (
			<div>
				<Link to="/posts">Return</Link>
				<Form onSubmit={data=> this.onSubmit(data)}/>
			</div>
		);
	}
}
import React from 'react';
import {
	connect
}
from 'react-redux';
import {
	Link
}
from 'react-router-dom';
import * as postAction from '../../actions/postActions';
import axios from 'axios';
import Form from './form';
import styles from './styles';

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

	onSubmit(values) {
		return axios.post('/posts', {
			'active': (values.active) ? 1 : 0,
			'title': values.title,
			'body': values.body,
		}).then((response) => {
			this.props.dispatch(postAction.addPost(response.data));
			this.setState({
				errorMessages: {},
			});
		}).catch((error) => {
			this.setState({
				errorMessages: error.response.data,
			});
		});
	}

	render() {
		return (
			<div>
				<Link to="/posts">Return</Link>
				<Form onSubmit={values=> this.onSubmit(values)}/>
			</div>
		);
	}
}
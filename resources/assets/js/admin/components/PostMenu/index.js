import React from 'react';
import PostList from '../PostList/index.js';
import {
	Route,
	Link
}
from 'react-router-dom';

export default class Posts extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Link to="/posts/new">Add New Post</Link>
				<PostList posts={this.props.posts} />
			</div>
		);
	}
}
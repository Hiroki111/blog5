import React from 'react';
import PostsContainer from '../PostsContainer/index.js';
import EditingPost from '../EditingPost';
import {
	Route,
	Link
}
from 'react-router-dom';

export default class Posts extends React.Component {
	constructor(props) {
		super(props);
		console.log("this.props.posts", this.props.posts);
	}

	render() {

		return (
			<div>
				<div><Link to="/posts/new">Add New Post</Link></div>
				<div>Search Box here</div>
				<div><PostsContainer posts={this.props.posts} /></div>
			</div>
		);
	}
}
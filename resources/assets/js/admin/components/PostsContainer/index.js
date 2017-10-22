import React from 'react';
import {
	Panel
}
from 'react-bootstrap';

export default class PostsContainer extends React.Component {
	constructor(props) {
		super(props);
		console.log("PostsContainer this.props.posts", this.props.posts);
	}

	render() {
		var panels = [];
		this.props.posts.forEach((post) => {
			panels.push(
				<Panel key={post.id} style={{ width: '1000px', marginTop:'20px' }}>
					<div>Title: {post.title}</div>
					<div>Date: {post.created_at}</div>
					<div>Published : {(post.active === 0)?'No':'Yes'}</div>
					<div>Body :</div>
				</Panel>
			);
		});

		return (
			<div>
				{panels}
			</div>
		);
	}
}
import React from 'react';
import {
	Route,
	Link,
	Switch
}
from 'react-router-dom';

export default class EditingPost extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Link to="/posts">Return</Link>
				<div>Title</div>
				<div>Content</div>
			</div>
		);
	}
}
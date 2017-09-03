import React from 'react';
import PostsContainer from './PostsContainer';
import {
	Route,
	Link,
	Switch
}
from 'react-router-dom';
import EditingPost from './EditingPost';

const Top = () => (
	<div>
		<div>
			<Link to="/posts/new">Add New Post</Link>
		</div>
		<div>
			Search Box here
		</div>
		<div>
			<PostsContainer>
			</PostsContainer>
		</div>
	</div>
)

export default class Posts extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/posts" component={Top}/>
					<Route path="/posts/new" component={EditingPost}/>
				</Switch>
			</div>
		);
	}
}
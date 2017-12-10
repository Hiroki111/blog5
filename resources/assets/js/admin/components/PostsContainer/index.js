import React from 'react';
import {
	Panel
}
from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import styles from "./styles";
import {
	Route,
	Link
}
from 'react-router-dom';
import {
	connect
}
from 'react-redux';
import {
	deletePost,
	deletePostFulfilled,
	deletePostRejected
}
from '../../actions/postActions';
import ConfirmationService from '../../services/ConfirmationService';
import ReactDOM from 'react-dom';

@connect((store) => {
	return {
		post: store.post.post
	};
})
export default class PostsContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	onPressDelete(id) {
		ConfirmationService('Do you really wish to delete this post?').then((result) => {
			this.props.dispatch(deletePost(id)).data.then((result) => {
				this.props.dispatch(deletePostFulfilled(id));
			}).catch((error) => {
				this.props.dispatch(deletePostRejected(error));
			});
		});
	}

	render() {
		const panels = [];
		const posts = this.props.posts;
		Object.keys(posts).forEach((id) => {
			panels.push(
				<Panel key={id} style={styles.panel}>
					<h3 style={styles.title}>{posts[id].title}</h3>
					<div>{(posts[id].active === 0)?'NOT PUBLISHED':'Published On '+posts[id].published_at.substr(0, 10)}, Written On {posts[id].created_at.substr(0, 10)}</div>
					<div style={styles.body}>{ReactHtmlParser(posts[id].body)}</div>
					<div style={{height:'20px'}}>
						<Link to={'/posts/edit/'+id}>
							<button style={styles.button} className="btn btn-simple">Edit</button>
						</Link>
						<button style={styles.button} className="btn btn-info">Preview</button>
						<button 
							style={styles.button}
							className="btn btn-danger"
							onClick={this.onPressDelete.bind(this,id)}>Delete</button>
					</div>
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
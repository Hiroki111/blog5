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
import EditingPost from '../EditingPost';

export default class PostsContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var panels = [];
		this.props.posts.forEach((post) => {
			panels.push(
				<Panel key={post.id} style={styles.panel}>
					<h3 style={styles.title}>{post.title}</h3>
					<div>{(post.active === 0)?'NOT PUBLISHED':'Published On '+post.published_at.substr(0, 10)}, Written On {post.created_at.substr(0, 10)}</div>
					<div style={styles.body}>{ReactHtmlParser(post.body)}</div>
					<div style={{height:'20px'}}>
						<Link to={'/posts/edit/'+post.id}>
							<button style={styles.button} className="btn btn-simple">Edit</button>
						</Link>
						<button style={styles.button} className="btn btn-info">Preview</button>
						<button style={styles.button} className="btn btn-danger">Delete</button>
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
import React from 'react';
import {
	Panel
}
from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import styles from "./styles";

export default class PostsContainer extends React.Component {
	constructor(props) {
		super(props);
		console.log("PostsContainer this.props.posts", this.props.posts);
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
						<button style={styles.button} className="btn btn-simple">Edit</button>
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
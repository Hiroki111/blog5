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
import lodash from 'lodash';

class PostList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchBox: ""
		}
	}

	onPressDelete(id) {
		ConfirmationService('Do you really wish to delete this post?').then((result) => {
			this.props.deletePost(id);
		}, (cancel) => {});
	}

	handleChange(event) {
		this.setState({
			searchBox: event.target.value
		});
	}

	render() {
		const panels = [];
		const searchString = this.state.searchBox.toLowerCase();
		const posts = this.props.posts.filter((post) => {
			return post.title.toLowerCase().includes(searchString) || post.body.toLowerCase().includes(searchString);
		});

		posts.forEach((post) => {
			panels.push(
				<Panel key={post.id} style={styles.panel}>
					<h3 style={styles.title}>{post.title}</h3>
					<div>
					{
						(post.active === 0) ?
						'NOT PUBLISHED':
						'Published On '+post.published_at.substr(0, 10)+', Written On'+ post.created_at.substr(0, 10)
					}
					</div>
					<div style={styles.body}>{ReactHtmlParser(post.body)}</div>
					<div style={{height:'20px'}}>
						<Link to={'/posts/edit/'+post.id}>
							<button style={styles.button} className="btn btn-simple">Edit</button>
						</Link>
						<button style={styles.button} className="btn btn-info">Preview</button>
						<button 
							style={styles.button}
							className="btn btn-danger"
							onClick={this.onPressDelete.bind(this,post.id)}>Delete</button>
					</div>
				</Panel>
			);
		});
		return (
			<div>
				<div>
					<input
						style={styles.searchBox}
						type="text"
						name="searchBox"
						value={this.state.searchBox}
						onChange={this.handleChange.bind(this)}
						className="form-control"
						placeholder="Enter to search..." />
				</div>
				{panels}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (id) => {
			dispatch(deletePost(id)).data.then((result) => {
				dispatch(deletePostFulfilled(id));
			}).catch((error) => {
				dispatch(deletePostRejected(error));
			});
		}
	}
}

export default connect(null, mapDispatchToProps)(PostList);
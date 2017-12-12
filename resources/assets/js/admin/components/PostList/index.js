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

@connect((store) => {
	return {
		post: store.post.post
	};
})
export default class PostList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchBox: ""
		}
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

	handleChange(event) {
		this.setState({
			searchBox: event.target.value
		});
	}

	render() {
		const panels = [];
		const ids = Object.keys(this.props.posts).filter((id) => {
			return (this.props.posts[id].title.indexOf(this.state.searchBox) > -1 || this.props.posts[id].body.indexOf(this.state.searchBox) > -1);
		});

		ids.forEach((id) => {
			panels.push(
				<Panel key={id} style={styles.panel}>
					<h3 style={styles.title}>{this.props.posts[id].title}</h3>
					<div>{(this.props.posts[id].active === 0) ?
						'NOT PUBLISHED':
						'Published On '+this.props.posts[id].published_at.substr(0, 10)}, Written On {this.props.posts[id].created_at.substr(0, 10)}
					</div>
					<div style={styles.body}>{ReactHtmlParser(this.props.posts[id].body)}</div>
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
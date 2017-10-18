import React from 'react';
import {
	Route,
	Link,
	Switch
}
from 'react-router-dom';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import {
	connect
}
from 'react-redux';
import * as postAction from '../../actions/postActions';
import axios from 'axios';
import {
	Alert
}
from 'react-bootstrap';
import lodash from 'lodash';

const divStyle = {
	'maxWidth': '95%'
};

const editorConfig = {
	charCounterCount: true
};

const publishDiv = {
	'marginTop': '10px',
	'marginBottom': '10px',
};

const wholeDiv = {
	'marginLeft': '5px',
	'paddingTop': '30px'
};

@connect((store) => {
	return {
		post: store.post.post
	};
})
export default class EditingPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			post: this.props.post,
			success: false,
			errorMessages: {}
		};
		this.onPublishChange = this.onPublishChange.bind(this);
		this.save = this.save.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onBodyChange = this.onBodyChange.bind(this);
	}

	onPublishChange(event) {
		const post = {
			...this.state.post,
			"active": (event.target.checked) ? 1 : 0
		};

		this.setState({
			post
		});
	}

	onTitleChange(event) {
		const post = {
			...this.state.post,
			"title": event.target.value
		};

		this.setState({
			post
		});
	}

	onBodyChange(body) {
		const post = {
			...this.state.post,
			"body": body
		};

		this.setState({
			post
		});
	}

	save() {
		axios.post('/posts', {
			'active': this.state.post.active,
			'title': this.state.post.title,
			'body': this.state.post.body,
		}).then((response) => {
			this.props.dispatch(postAction.addPost(response.data));
			this.setState({
				errorMessages: {},
				success: true,
			});
		}).catch((error) => {
			this.setState({
				errorMessages: error.response.data,
				success: false,
			});
		});
	}

	render() {
		console.log("this.state", this.state, "lodash.size(this.state.errorMessages)", lodash.size(this.state.errorMessages));
		return (
			<div style={wholeDiv}>
					<Link to="/posts">Return</Link>
				<div style={divStyle}>
		        	<div className="section section-notifications" id="notifications">
		        		{this.state.success &&
	        				<div className="alert alert-success">
	            				<div className="container-fluid">
									<div className="alert-icon">
										<i className="material-icons">check</i>
									</div>
									<button type="button" className="close" data-dismiss="alert" aria-label="Close">
										<span aria-hidden="true"><i className="material-icons">clear</i></span>
									</button>
	            					<b>Success</b>
	            				</div>
	        				</div>
	        			}
	        			{lodash.size(this.state.errorMessages) > 0 &&
	        				<Alert bsStyle="danger">
          						<strong>Error</strong>
          						{Object.keys(this.state.errorMessages)
          						.map((key) => <p key={this.state.errorMessages[key]}>{this.state.errorMessages[key]}</p>)}
        					</Alert>
	        			}
	        			<div className="clearfix"></div>
	    			</div>
	    		</div>
	    		<div style={divStyle}>
	    			<div className="form-group" style={divStyle}>
						<input type="text" 
							placeholder="Title"
							className="form-control"
							value={this.state.post.title}
							onChange={this.onTitleChange} />
		        		<span className="material-input"></span>
		        	</div>
		        </div>
				<div style={divStyle}>
					<FroalaEditor
					tag='textarea'
					config={editorConfig}
					model={this.state.post.body}
					name="body"
					onModelChange={this.onBodyChange} />
				</div>
				<div>
					<div style={publishDiv} className="checkbox">
						<label>
							<input id="published"
								type="checkbox"
					   			checked={this.state.post.active > 0}
					   			onChange={this.onPublishChange} /> 
							<span className="checkbox-material"><span className="check">
							</span></span>
							Publish
						</label>
					</div>
					<button className="btn" onClick={this.save}>Save</button>
				</div>
			</div>
		);
	}
}
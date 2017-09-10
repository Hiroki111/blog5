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
import * as postAction from '../actions/postActions';

const divStyle = {
	'maxWidth': '95%'
};

const editorConfig = {
	charCounterCount: true
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
			isPublished: (this.props.post.active > 0)
		};
		this.onChange = this.onChange.bind(this);
		this.save = this.save.bind(this);
	}

	onChange(event) {
		this.setState({
			isPublished: event.target.checked
		});
		this.props.post.active = (event.target.checked) ? 1 : 0;
	}

	save() {
		console.log("saved!");
		this.props.dispatch(postAction.addPost());
	}

	render() {
		console.log(this.props.post, this.props.post.active > 0);
		return (
			<div>
				<Link to="/posts">Return</Link>
				<div>Title</div>
				<div style={divStyle}>
					<FroalaEditor
					tag='textarea'
					config={editorConfig}
					model={this.props.post.body}/>
				</div>
				<div>
				<input type="checkbox"
					   checked={this.state.isPublished}
					   onChange={this.onChange} /> 
					<button onClick={this.save}>Save</button>
				</div>
			</div>
		);
	}
}
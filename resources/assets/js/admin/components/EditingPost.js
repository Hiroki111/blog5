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

export default class EditingPost extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Link to="/posts">Return</Link>
				<div>Title</div>
				<div><FroalaEditor tag='textarea'/></div>
			</div>
		);
	}
}
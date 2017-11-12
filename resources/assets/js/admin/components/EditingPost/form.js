import React from 'react';
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
import {
	Field,
	reduxForm
}
from 'redux-form';
import styles from "./styles";

@connect((store) => {
	return {
		post: store.post.post
	};
})
class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
			handleSubmit
		} = this.props;
		return (
			<div>
				<form onSubmit={handleSubmit}>					
	    			<div style={styles.divStyle}>
	    				<div className="form-group" style={styles.divStyle}>
							<Field name="title"
								component="input"
								type="text"
								placeholder="Title"
								className="form-control" />
		        			<span className="material-input"></span>
		        		</div>
		        	</div>
					<div style={styles.divStyle}>
						<Field name="body"
							component="textarea" />
					</div>
					<div>
						<div style={styles.publishDiv} className="checkbox">
							<label>
								<Field id="active"
									name="active"
									component="input"
									type="checkbox" />
								<span className="checkbox-material"><span className="check">
								</span></span>
								Publish
							</label>
						</div>
						<button type="submit" className="btn">Save</button>
					</div>
				</form>
			</div>
		);
	}
}

Form = reduxForm({
	form: 'Form'
})(Form);

export default Form;
import React from 'react';
import {
	Modal,
	Button
}
from 'react-bootstrap';
import {
	connect
}
from 'react-redux';
import {
	deleteImage,
	deleteImageFulfilled,
	deleteImageRejected
}
from '../../actions/imageActions';
import styles from './styles';
import {
	notify
}
from 'react-notify-toast';

class ImageModal extends React.Component {
	constructor(props) {
		super(props);
		this.clickDelete = this.clickDelete.bind(this);
	}

	clickDelete(file) {
		return this.props.deleteImage(file).then(() => this.props.onHide());
	}

	render() {
		return (
			<Modal show={this.props.show} bsSize="large" aria-labelledby="contained-modal-title-lg">
        		<Modal.Body>
        			<img src={'/storage/'+this.props.selectedImage} style={styles.image} />
        			<p>{'/storage/'+this.props.selectedImage}</p>
        		</Modal.Body>
        		<Modal.Footer>
        			<Button
        				bsStyle="danger"
        				style={styles.deleteButton}
        				onClick={() => this.clickDelete(this.props.selectedImage)}>Delete</Button>
          			<Button onClick={this.props.onHide}>Close</Button>
        		</Modal.Footer>
      		</Modal>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteImage: (file) => {
			return dispatch(deleteImage(file)).data.then((result) => {
				notify.show('Image Delted.', 'success', 4000);
				dispatch(deleteImageFulfilled(result.data));
			}).catch((error) => {
				notify.show('Unalble to delete this image.', 'error', 4000);
				dispatch(deleteImageRejected());
				throw Error(error);
			});
		}
	}
}

export default connect(null, mapDispatchToProps)(ImageModal);
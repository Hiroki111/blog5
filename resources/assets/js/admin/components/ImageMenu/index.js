import React from 'react';
import Dropzone from 'react-dropzone';
import ImageModal from '../ImageModal';
import {
	addImage,
	addImageFulfilled,
	addImageRejected
}
from '../../actions/imageActions';
import {
	connect
}
from 'react-redux';
import {
	notify
}
from 'react-notify-toast';
import styles from "./styles";

class ImageMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			selectedImage: "",
		};
		this.onClick = this.onClick.bind(this);
		this.handleClickClose = this.handleClickClose.bind(this);
	}

	onImageDrop(files) {
		return this.props.addImage(files[0]);
	}

	onClick(image) {
		this.setState({
			showModal: true,
			selectedImage: image
		});
	}

	handleClickClose() {
		this.setState({
			showModal: false
		});
	}

	render() {
		const images = this.props.images.map((image, index) => {
			return <div key={index} style={styles.imageFrame}>
						<figure key={index} style={styles.imageFigure}>
							<img
								key={index}
								src={'/storage/'+image}
								onClick={() => this.onClick(image)}/>
						</figure>
					</div>;
		});
		return (
			<div>
      			<div className="FileUpload">
        			<Dropzone
      					multiple={false}
      					accept="image/*"
      					style={styles.dropZone}
      					onDrop={this.onImageDrop.bind(this)}>
      					<p>Drop an image, or click here and select a file to upload.</p>
    				</Dropzone>
      			</div>
      			<div style={styles.imageList}>
      				{images}
      			</div>
      			<ImageModal
      				show={this.state.showModal}
      				onHide={() => this.handleClickClose()}
      				selectedImage={this.state.selectedImage}/>
    		</div>
		);

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addImage: (file) => {
			return dispatch(addImage(file)).data.then((result) => {
				notify.show('Saved', 'success', 4000);
				dispatch(addImageFulfilled(result.data));
			}).catch((error) => {
				notify.show('Unalble to save this image.', 'error', 4000);
				dispatch(addImageRejected());
			});
		}
	}
}

export default connect(null, mapDispatchToProps)(ImageMenu);
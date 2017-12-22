import React from 'react';
import Dropzone from 'react-dropzone';
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
	}

	onImageDrop(files) {
		return this.props.dispatch(addImage(files[0])).data.then((result) => {
			notify.show('Saved', 'success', 20000);
			this.props.dispatch(addImageFulfilled(result.data));
		}).catch((error) => {
			this.props.dispatch(addImageRejected());
		});
	}

	render() {
		const images = this.props.images.map((image, index) => {
			return <div key={index} style={styles.imageFrame}>
						<figure style={styles.imageFigure}>
							<img key={index} src={'/storage/' +image} style={styles.image} />
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
    		</div>
		);

	}
}

export default connect()(ImageMenu)
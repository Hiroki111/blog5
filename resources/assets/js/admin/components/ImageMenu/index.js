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

class ImageMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file: '',
			imagePreviewUrl: '',
			uploadedFileUrl: '',
			uploadedFile: '',
		};
	}

	onImageDrop(files) {
		return this.props.dispatch(addImage(files[0])).data.then((result) => {
			console.log("result", result);
		}).catch((error) => {
			console.log("error", error);
		});

	}

	render() {
		return (
			<div>
      			<div className="FileUpload">
        			<Dropzone
      					multiple={false}
      					accept="image/*"
      					onDrop={this.onImageDrop.bind(this)}>
      					<p>Drop an image or click to select a file to upload.</p>
    				</Dropzone>
      			</div>			
      			<div>
        			{this.state.uploadedFileUrl === '' ? null :
        			<div>
          			<p>{this.state.uploadedFile.name}</p>
          			<img src={this.state.uploadedFileUrl} />
        			</div>}
      			</div>
    		</div>
		);

	}
}

export default connect()(ImageMenu)
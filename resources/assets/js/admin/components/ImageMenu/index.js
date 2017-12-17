import React from 'react';

export default class ImageMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file: '',
			imagePreviewUrl: ''
		};
	}

	handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			}, () => {
				console.log('handle uploading-', this.state);
			});
		}

		reader.readAsDataURL(file);
	}

	handleSubmit(e) {
		console.log('handle uploading-', this.state.file);
		//e.preventDefault();
		//return;
		// TODO: do something with -> this.state.file
	}

	render() {
		let {
			imagePreviewUrl
		} = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} />);
		}
		else {
			$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
		}
		return (
			<div>
				<div>Add New Image</div>
				<form onSubmit={(e)=>this._handleSubmit(e)}>
          			<input
          				className="fileInput" 
            			type="file" 
            			onChange={(e)=>this.handleImageChange(e)} />
          			<button
          				className="submitButton" 
            			type="submit">Upload Image</button>
        		</form>
        		<div className="imgPreview">
          			{$imagePreview}
        		</div>
				<div></div>
			</div>
		);
	}
}
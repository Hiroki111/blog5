import React from 'react';
import {
	PulseLoader
}
from 'react-spinners';
import {
	connect
}
from 'react-redux';

@connect((store) => {
	return {
		loadingPosts: store.post.loading,
		loadingImages: store.image.loading,
	};
})
export default class LoadingAnimation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const loadingPosts = this.props.loadingPosts;
		const loadingImages = this.props.loadingImages;
		return (
			<div className='sweet-loading loading-bar'>
        		<PulseLoader
        			color={'#123abc'}
        			loading={loadingPosts && loadingImages}
        			size={30}
        		/>
      		</div>
		);
	}
}
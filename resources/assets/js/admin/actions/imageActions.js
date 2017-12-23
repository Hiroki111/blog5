import axios from "axios";

export function fetchImages() {
	const request = axios({
		method: 'get',
		url: '/images',
	});

	return {
		type: "FETCH_IMAGES",
		data: request
	};
}

export function fetchImagesFulfilled(images) {
	return {
		type: "FETCH_IMAGES_FULFILLED",
		data: images
	};
}

export function fetchImageSRejected(error) {
	return {
		type: "FETCH_IMAGES_REJECTED",
		data: error
	};
}

export function addImage(image) {
	//Javascript's File class needs to be in FormData
	//for it to be sent with axios.
	const formData = new FormData();
	formData.append("image", image);

	const request = axios({
		method: 'post',
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		data: formData,
		url: '/images',
	});

	return {
		type: "ADD_IMAGE",
		data: request
	};
}

export function addImageFulfilled(newImage) {
	return {
		type: "ADD_IMAGE_FULFILLED",
		data: newImage
	};
}

export function addImageRejected(error) {
	return {
		type: "ADD_IMAGE_REJECTED",
		data: error
	};
}

export function deleteImage(image) {
	const request = axios({
		method: 'delete',
		url: '/images',
		data: {
			image: image
		}
	});

	return {
		type: "DELETE_IMAGE",
		data: request
	};
}

export function deleteImageFulfilled(name) {
	return {
		type: "DELETE_IMAGE_FULFILLED",
		data: name
	};
}

export function deleteImageRejected(error) {
	return {
		type: "DELETE_IMAGE_REJECTED",
		data: error
	};
}
import axios from "axios";

export function fetchPosts() {
	return (dispatch) => {
		dispatch({
			type: "FETCH_POSTS"
		});
		axios.get('/posts')
			.then((response) => {
				const posts = {};
				response.data.forEach((post) => {
					posts[post.id] = post
				});
				dispatch({
					type: "FETCH_POSTS_SUCCESS",
					data: posts
				});
			}).catch((error) => {
				dispatch({
					type: "FETCH_POSTS_ERROR",
					data: error
				});
			});
	}
}

export function addPost(values) {
	const request = axios({
		method: 'post',
		data: values,
		url: '/posts',
	});

	return {
		type: "ADD_POST",
		data: request
	};
}

export function addPostFulfilled(newPost) {
	return {
		type: "ADD_POST_FULFILLED",
		data: newPost
	};
}

export function addPostRejected(error) {
	return {
		type: "ADD_POST_REJECTED",
		data: error
	};
}

export function updatePost(id, values) {
	const request = axios({
		method: 'put',
		data: values,
		url: '/posts/' + id,
	});

	return {
		type: "UPDATE_POST",
		data: request
	};
}

export function updatePostFulfilled(post) {
	return {
		type: "UPDATE_POST_FULFILLED",
		data: post
	};
}

export function updatePostRejected(error) {
	return {
		type: "UPDATE_POST_REJECTED",
		data: error
	};
}

export function getPost(id) {
	const request = axios({
		method: 'get',
		url: '/posts/' + id,
	});

	return {
		type: "GET_POST",
		data: request
	};
}

export function getPostFulfilled(post) {
	return {
		type: "GET_POST_FULFILLED",
		data: post
	};
}

export function getPostRejected(error) {
	return {
		type: "GET_POST_REJECTED",
		data: error
	};
}

export function resetPost() {
	return {
		type: "RESET_POST",
		data: {}
	}
}

export function deletePost(id) {
	return {
		type: "DELETE_POST",
		data: id,
	};
}
import axios from "axios";

export function addPost(post) {
	return {
		type: "ADD_POST",
		data: post,
	};
}

export function updatePost(Post) {
	return {
		type: "UPDATE_POST",
		data: post,
	};
}

export function getPost(id) {
	return {
		type: "GET_POST",
		data: id,
	};
}

export function deletePost(id) {
	return {
		type: "DELETE_POST",
		data: id,
	};
}

export function sortPosts(order) {
	return {
		type: "SORT_POSTS",
		data: order,
	};
}

export function fetchPosts() {
	return function(dispatch) {
		axios.get('/posts')
			.then((response) => {
				dispatch({
					type: "FETCH_POSTS",
					data: response.data
				});
			}).catch((error) => {
				dispatch({
					type: "FETCH_POSTS_ERROR",
					data: error
				});
			});
	}
}
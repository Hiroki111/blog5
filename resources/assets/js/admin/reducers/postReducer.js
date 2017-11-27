export default function postReducer(state = {
	post: {},
	posts: {},
	loading: false,
}, action) {
	switch (action.type) {
		case "FETCH_POSTS":
			{
				return {
					...state,
					loading: true
				}
				break;
			}
		case "FETCH_POSTS_SUCCESS":
			{
				return {
					...state,
					posts: action.data,
					loading: false
				}
				break;
			}
		case "FETCH_POSTS_ERROR":
			{
				return {
					...state,
					loading: false
				}
				break;
			}
		case "ADD_POST":
			{
				return {
					...state,
					loading: true
				}
				break;
			}
		case "ADD_POST_FULFILLED":
			{
				return {
					...state,
					posts: {
						...state.posts,
						[action.data.id]: action.data
					},
					loading: false
				}
				break;
			}
		case "ADD_POST_REJECTED":
			{
				return {
					...state,
					loading: false
				}
				break;
			}

		case "GET_POST":
			{
				return {
					...state,
					post: state.posts[action.data]
				}
				break;
			}
		case "RESET_POST":
			{
				return {
					...state,
					post: {}
				}
				break;
			}
	}
	return state;
}
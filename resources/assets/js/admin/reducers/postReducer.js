export default function postReducer(state = {
	post: {
		id: 0,
		active: 0,
		title: "",
		type: "",
		body: "",
		published_at: "",
	},
	posts: [],
}, action) {
	switch (action.type) {
		case "FETCH_POSTS":
			{
				return {
					...state,
					posts: action.data,
				}
				break;
			}
		case "GET_POST":
			{
				return {
					...state,
					post: state.posts.find((post) => {
						return post.id === action.data
					}),
				}
				break;
			}
		case "SET_POST":
			{
				return {
					...state,
					post: action.data,
				}
				break;
			}
		case "FETCH_POSTS_ERROR":
			{
				return {
					...state,
					posts: [],
				}
				break;
			}
		case "ADD_POST":
			{
				return {
					...state,
					posts: [...state.posts, action.data],
				}
				break;
			}
	}
	return state;
}
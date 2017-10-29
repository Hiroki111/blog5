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
export default function imageReducer(state = {
	images: [],
	loading: false,
}, action) {
	switch (action.type) {
		case "FETCH_IMAGES":
			{
				return {
					...state,
					loading: true
				}
				break;
			}
		case "FETCH_IMAGES_FULFILLED":
			{
				return {
					...state,
					images: action.data,
					loading: false
				}
				break;
			}
		case "FETCH_IMAGES_REJECTED":
			{
				return {
					...state,
					loading: false
				}
				break;
			}
		case "ADD_IMAGE":
			{
				return {...state,
					loading: true
				}
				break;
			}
		case "ADD_IMAGE_FULFILLED":
			{
				return {
					...state,
					images: [
						...state.images, action.data
					],
					loading: false
				}
				break;
			}
		case "ADD_IMAGE_REJECTED":
			{
				return {
					...state,
					loading: false
				}
				break;
			}
		case "DELETE_IMAGE":
			{
				return {
					...state,
					loading: true
				}
				break;
			}

		case "DELETE_IMAGE_FULFILLED":
			{
				return {
					...state,
					images: state.images.filter(function(image) {
						return image != action.data;
					}),
					loading: false
				}
				break;
			}

		case "DELETE_IMAGE_REJECTED":
			{
				return {
					...state,
					loading: false
				}
				break;
			}
	}
	return state;
}
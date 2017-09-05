export default function postReducer(state = {
	post: {
		word: "",
		pronunciation: "",
		type: "",
		meaning: "",
		example: "",
	},
	words: [],
	sortBy: "FO",
}, action) {
	switch (action.type) {
		case "FETCH_WORDS":
			{
				return {
					...state,
					words: action.data,
				}
				break;
			}
		case "SET_WORD":
			{
				return {
					...state,
					word: action.data,
				}
				break;
			}
		case "FETCH_WORDS_ERROR":
			{
				return {
					...state,
					words: [],
				}
				break;
			}
		case "ADD_WORD":
			{
				return {
					...state,
					words: [...state.words, action.data],
				}
				break;
			}
		case "UPDATE_WORD":
			{
				return {
					...state,
					words: state.words.map(function(word) {
						if (word.id === action.data.id) {
							return action.data;
						}
						else {
							return word;
						}
					}),
				}
			}
		case "DELETE_WORD":
			{
				return {
					...state,
					words: state.words.filter(function(word) {
						return word.id != action.data;
					}),
				}
			}
		case "SORT_WORDS":
			{
				return {
					...state,
					sortBy: action.data,
				}
				break;
			}
	}
	return state;
}
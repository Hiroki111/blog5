import axios from 'axios';

export function addWord(word) {
	return {
		type: "ADD_WORD",
		data: word,
	};
}

export function updateWord(word) {
	return {
		type: "UPDATE_WORD",
		data: word,
	};
}

export function setWord(word) {
	return {
		type: "SET_WORD",
		data: word,
	};
}

export function deleteWord(id) {
	return {
		type: "DELETE_WORD",
		data: id,
	};
}

export function sortWords(order) {
	return {
		type: "SORT_WORDS",
		data: order,
	};
}

export function fetchWords() {
	return function(dispatch) {
		axios.get()
			.then((response) => {
				dispatch(type: "", data: response.data);
			}).catch((error) => {
				dispatch(type: "", data: error);
			});
	}
}
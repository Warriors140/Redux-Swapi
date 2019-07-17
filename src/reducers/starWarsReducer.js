import { LOADING, SUCCESS, FAILURE } from  "../actions";

const initialState = {
  characters: [],
  fetching: false,
  errorMessage: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case LOADING: {
      return {
        ...state,
        fetching: true
      };
    }
    case SUCCESS: {
      return {
        ...state,
        characters: action.payload,
        fetching: false
      };
    }
    case FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        fetching: false
      };
    }
    default:
      return state;
  }
};

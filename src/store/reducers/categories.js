import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from "../actions/constants";

const categories = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories
      };
    default:
      return state;
  }
};

export default categories;

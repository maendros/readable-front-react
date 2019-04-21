// actions/categories.js

import * as ReadableAPI from "../../utils/ReadableAPI";
import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from "./constants";

export const requestCategories = categories => ({
  type: REQUEST_CATEGORIES,
  categories
});

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => {
  return dispatch => {
    dispatch(requestCategories());
    return ReadableAPI.fetchCategories().then(categories =>
      dispatch(receiveCategories(categories))
    );
  };
};

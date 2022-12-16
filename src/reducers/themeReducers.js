import {
  THEME_GET_FAIL,
  THEME_GET_REQUEST,
  THEME_GET_SUCCESS,
} from '../constants/themeConstants';

export const themeReducer = (state = {}, action) => {
  switch (action.type) {
    case THEME_GET_REQUEST:
      return { loading: true };
    case THEME_GET_SUCCESS:
      return { loading: false, themeInfo: action.payload };
    case THEME_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

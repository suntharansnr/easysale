import Axios from 'axios';
import {
  THEME_GET_FAIL,
  THEME_GET_REQUEST,
  THEME_GET_SUCCESS,
} from '../constants/themeConstants';

export const gettheme = () => async (dispatch) => {
  dispatch({ type: THEME_GET_REQUEST });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/settings`);
    dispatch({ type: THEME_GET_SUCCESS, payload: data });
    localStorage.setItem('themeInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: THEME_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};







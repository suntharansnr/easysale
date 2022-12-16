import Axios from 'axios';
import {
  DISTRICT_LIST_FAIL,
  DISTRICT_LIST_REQUEST,
  DISTRICT_LIST_SUCCESS,
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS,
  GET_CITY_FAIL,
} from '../constants/locationConstants';

export const listDistrict = () => async (dispatch) => {
  dispatch({
    type: DISTRICT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/districtsSuggestion`);
    dispatch({ type: DISTRICT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DISTRICT_LIST_FAIL, payload: error.message });
  }
};

export const getCity = (districtId) => async (dispatch) => {
  dispatch({ type: GET_CITY_REQUEST, payload: districtId });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/get-city-by-district/${districtId}`);
    dispatch({ type: GET_CITY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_CITY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

import Axios from 'axios';
import {
  PACKAGE_CREATE_FAIL,
  PACKAGE_CREATE_REQUEST,
  PACKAGE_CREATE_SUCCESS,
  PACKAGE_DETAILS_FAIL,
  PACKAGE_DETAILS_REQUEST,
  PACKAGE_DETAILS_SUCCESS,
  PACKAGE_LIST_FAIL,
  PACKAGE_LIST_REQUEST,
  PACKAGE_LIST_SUCCESS,
  PACKAGE_UPDATE_REQUEST,
  PACKAGE_UPDATE_SUCCESS,
  PACKAGE_UPDATE_FAIL,
  PACKAGE_DELETE_REQUEST,
  PACKAGE_DELETE_FAIL,
  PACKAGE_DELETE_SUCCESS,

} from '../constants/packageConstants';

export const listPackages = () => async (dispatch,getState) => {
  dispatch({
    type: PACKAGE_LIST_REQUEST,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/memberships`
      ,      {
        headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
      }
    );
    dispatch({ type: PACKAGE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PACKAGE_LIST_FAIL, payload: error.message });
  }
};

export const detailsPackage = (packageId) => async (dispatch) => {
  dispatch({ type: PACKAGE_DETAILS_REQUEST, payload: packageId });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/packages/${packageId}`);
    dispatch({ type: PACKAGE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PACKAGE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createPackage = (packages) => async (dispatch, getState) => {
  dispatch({ type: PACKAGE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();

  try {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/memberships/store`,
      packages,
      {
        headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
      }
    );
    dispatch({
      type: PACKAGE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PACKAGE_CREATE_FAIL, payload: message });
  }
};
export const updatePackage = (packages) => async (dispatch, getState) => {
  dispatch({ type: PACKAGE_UPDATE_REQUEST, payload: packages });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`${process.env.REACT_APP_API_URL}/api/packages/${packages._id}`, packages, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PACKAGE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PACKAGE_UPDATE_FAIL, error: message });
  }
};
export const deletePackage = (packageId) => async (dispatch, getState) => {
  dispatch({ type: PACKAGE_DELETE_REQUEST, payload: packageId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`${process.env.REACT_APP_API_URL}/api/packages/${packageId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PACKAGE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PACKAGE_DELETE_FAIL, payload: message });
  }
};

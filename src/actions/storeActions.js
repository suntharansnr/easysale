import Axios from 'axios';
import {
  STORE_CREATE_FAIL,
  STORE_CREATE_REQUEST,
  STORE_CREATE_SUCCESS,
  STORE_DETAILS_FAIL,
  STORE_DETAILS_REQUEST,
  STORE_DETAILS_SUCCESS,
  STORE_LIST_FAIL,
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
  STORE_UPDATE_REQUEST,
  STORE_UPDATE_SUCCESS,
  STORE_UPDATE_FAIL,
  STORE_DELETE_REQUEST,
  STORE_DELETE_FAIL,
  STORE_DELETE_SUCCESS,
  STORE_CATEGORY_LIST_SUCCESS,
  STORE_CATEGORY_LIST_REQUEST,
  STORE_CATEGORY_LIST_FAIL,

  STORE_SUB_CATEGORY_LIST_SUCCESS,
  STORE_SUB_CATEGORY_LIST_REQUEST,
  STORE_SUB_CATEGORY_LIST_FAIL,

  STORE_REVIEW_CREATE_REQUEST,
  STORE_REVIEW_CREATE_SUCCESS,
  STORE_REVIEW_CREATE_FAIL,

  SAVE_FAVORITE_REQUEST,
  SAVE_FAVORITE_SUCCESS,
  SAVE_FAVORITE_FAIL,
  fAVORITE_LIST_REQUEST,
  fAVORITE_LIST_SUCCESS,
  fAVORITE_LIST_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,

} from '../constants/storeConstants';

export const listStores = ({
  pageNumber = '',
  seller = '',
  name = '',
  category = '',
  sub_category = '',
  district = '',
  brand = '',
  order = '',
  min = 0,
  max = 0,
  rating = 0,
  ad_status = ''
}) => async (dispatch,getState) => {
  dispatch({
    type: STORE_LIST_REQUEST,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/stores?pageNumber=${pageNumber}&seller=${seller}&q=${name}&category=${category}&sub_category=${sub_category}&brand=${brand}&district=${district}&min=${min}&max=${max}&rating=${rating}&shortBy=${order}&status=${ad_status}`
      ,      {
        headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
      }
    );
    dispatch({ type: STORE_LIST_SUCCESS, payload: data.stores });
  } catch (error) {
    dispatch({ type: STORE_LIST_FAIL, payload: error.message });
  }
};

export const listStoreCategories = () => async (dispatch) => {
  dispatch({
    type: STORE_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/browse-by-categories`);
    dispatch({ type: STORE_CATEGORY_LIST_SUCCESS, payload: data['data']['allcategories'] });
  } catch (error) {
    dispatch({ type: STORE_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const listStoreSubCategories = (category) => async (dispatch) => {
  dispatch({
    type: STORE_SUB_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/browse-by-categories/`+category);
    dispatch({ type: STORE_SUB_CATEGORY_LIST_SUCCESS, payload: data['data']['allcategories'] });
  } catch (error) {
    dispatch({ type: STORE_SUB_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsStore = (storeId) => async (dispatch) => {
  dispatch({ type: STORE_DETAILS_REQUEST, payload: storeId });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/stores/${storeId}`);
    dispatch({ type: STORE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STORE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createStore = (store) => async (dispatch, getState) => {
  dispatch({ type: STORE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/u/posts/create`,
      store,
      {
        headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
      }
    );
    dispatch({
      type: STORE_CREATE_SUCCESS,
      payload: data.store,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STORE_CREATE_FAIL, payload: message });
  }
};
export const updateStore = (store) => async (dispatch, getState) => {
  dispatch({ type: STORE_UPDATE_REQUEST, payload: store });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`${process.env.REACT_APP_API_URL}/api/stores/${store._id}`, store, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: STORE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STORE_UPDATE_FAIL, error: message });
  }
};
export const deleteStore = (storeId) => async (dispatch, getState) => {
  dispatch({ type: STORE_DELETE_REQUEST, payload: storeId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`${process.env.REACT_APP_API_URL}/api/stores/${storeId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: STORE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STORE_DELETE_FAIL, payload: message });
  }
};

export const createReview = (storeId, review) => async (
  dispatch,
  getState
) => {
  dispatch({ type: STORE_REVIEW_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/stores/${storeId}/reviews`,
      review,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: STORE_REVIEW_CREATE_SUCCESS,
      payload: data.review,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STORE_REVIEW_CREATE_FAIL, payload: message });
  }
};

export const getData = (categoryId) => async (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST, payload: categoryId });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/get-data-by-category/${categoryId}`);
    dispatch({ type: GET_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

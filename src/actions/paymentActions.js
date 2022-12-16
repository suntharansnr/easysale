import Axios from 'axios';
import {
  PAYMENT_CREATE_FAIL,
  PAYMENT_CREATE_REQUEST,
  PAYMENT_CREATE_SUCCESS,

  PAYMENT_DETAILS_FAIL,
  PAYMENT_DETAILS_REQUEST,
  PAYMENT_DETAILS_SUCCESS,

  PAYMENT_LIST_FAIL,
  PAYMENT_LIST_REQUEST,
  PAYMENT_LIST_SUCCESS,

  PAYMENT_UPDATE_REQUEST,
  PAYMENT_UPDATE_SUCCESS,
  PAYMENT_UPDATE_FAIL,

  PAYMENT_DELETE_REQUEST,
  PAYMENT_DELETE_FAIL,
  PAYMENT_DELETE_SUCCESS,

  PAYMENT_CATEGORY_LIST_SUCCESS,
  PAYMENT_CATEGORY_LIST_REQUEST,
  PAYMENT_CATEGORY_LIST_FAIL,

  PAYMENT_SUB_CATEGORY_LIST_SUCCESS,
  PAYMENT_SUB_CATEGORY_LIST_REQUEST,
  PAYMENT_SUB_CATEGORY_LIST_FAIL,

  PAYMENT_REVIEW_CREATE_REQUEST,
  PAYMENT_REVIEW_CREATE_SUCCESS,
  PAYMENT_REVIEW_CREATE_FAIL,

  SAVE_FAVORITE_REQUEST,
  SAVE_FAVORITE_SUCCESS,
  SAVE_FAVORITE_FAIL,
  fAVORITE_LIST_REQUEST,
  fAVORITE_LIST_SUCCESS,
  fAVORITE_LIST_FAIL,

} from '../constants/paymentConstants';

export const listPayments = ({
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
}) => async (dispatch,getState) => {
  dispatch({
    type: PAYMENT_LIST_REQUEST,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/payments?pageNumber=${pageNumber}&seller=${seller}&q=${name}&category=${category}&sub_category=${sub_category}&brand=${brand}&district=${district}&min=${min}&max=${max}&rating=${rating}&shortBy=${order}`
      ,      {
        headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
      }
    );
    dispatch({ type: PAYMENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PAYMENT_LIST_FAIL, payload: error.message });
  }
};

export const listPaymentCategories = () => async (dispatch) => {
  dispatch({
    type: PAYMENT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/browse-by-categories`);
    dispatch({ type: PAYMENT_CATEGORY_LIST_SUCCESS, payload: data['data']['allcategories'] });
  } catch (error) {
    dispatch({ type: PAYMENT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const listPaymentSubCategories = (category) => async (dispatch) => {
  dispatch({
    type: PAYMENT_SUB_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/browse-by-categories/`+category);
    dispatch({ type: PAYMENT_SUB_CATEGORY_LIST_SUCCESS, payload: data['data']['allcategories'] });
  } catch (error) {
    dispatch({ type: PAYMENT_SUB_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsPayment = (paymentId) => async (dispatch) => {
  dispatch({ type: PAYMENT_DETAILS_REQUEST, payload: paymentId });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/payments-info/${paymentId}`);
    dispatch({ type: PAYMENT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PAYMENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createPayment = () => async (dispatch, getState) => {
  dispatch({ type: PAYMENT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/payments`,
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: PAYMENT_CREATE_SUCCESS,
      payload: data.payment,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PAYMENT_CREATE_FAIL, payload: message });
  }
};
export const updatePayment = (payment) => async (dispatch, getState) => {
  dispatch({ type: PAYMENT_UPDATE_REQUEST, payload: payment });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`${process.env.REACT_APP_API_URL}/api/payments/${payment._id}`, payment, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PAYMENT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PAYMENT_UPDATE_FAIL, error: message });
  }
};
export const deletePayment = (paymentId) => async (dispatch, getState) => {
  dispatch({ type: PAYMENT_DELETE_REQUEST, payload: paymentId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`${process.env.REACT_APP_API_URL}/api/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PAYMENT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PAYMENT_DELETE_FAIL, payload: message });
  }
};

export const listFavorites = ({
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
}) => async (dispatch,getState) => {
  dispatch({
    type: fAVORITE_LIST_REQUEST,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/u/posts/favorite-lists?pageNumber=${pageNumber}&seller=${seller}&q=${name}&category=${category}&sub_category=${sub_category}&brand=${brand}&district=${district}&min=${min}&max=${max}&rating=${rating}&shortBy=${order}`
      ,      {
        headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
      }
    );
    console.log(data);
    dispatch({ type: fAVORITE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: fAVORITE_LIST_FAIL, payload: error.message });
  }
};


export const saveFavorite = (paymentId) => async (dispatch, getState) => {
  dispatch({ type: SAVE_FAVORITE_REQUEST, payload: paymentId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await  Axios.get(`${process.env.REACT_APP_API_URL}/api/save-ad-as-favorite/${paymentId}`, {
      headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
    });
    dispatch({ type: SAVE_FAVORITE_SUCCESS,payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SAVE_FAVORITE_FAIL, payload: message });
  }
};

export const createReview = (paymentId, review) => async (
  dispatch,
  getState
) => {
  dispatch({ type: PAYMENT_REVIEW_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/payments/${paymentId}/reviews`,
      review,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: PAYMENT_REVIEW_CREATE_SUCCESS,
      payload: data.review,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PAYMENT_REVIEW_CREATE_FAIL, payload: message });
  }
};

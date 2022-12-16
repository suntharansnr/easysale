import Axios from 'axios';
import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_CATEGORY_LIST_SUCCESS,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_FAIL,

  PRODUCT_SUB_CATEGORY_LIST_SUCCESS,
  PRODUCT_SUB_CATEGORY_LIST_REQUEST,
  PRODUCT_SUB_CATEGORY_LIST_FAIL,

  PRODUCT_REVIEW_CREATE_REQUEST,
  PRODUCT_REVIEW_CREATE_SUCCESS,
  PRODUCT_REVIEW_CREATE_FAIL,

  SAVE_FAVORITE_REQUEST,
  SAVE_FAVORITE_SUCCESS,
  SAVE_FAVORITE_FAIL,
  fAVORITE_LIST_REQUEST,
  fAVORITE_LIST_SUCCESS,
  fAVORITE_LIST_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  PRODUCT_IMAGE_LIST_REQUEST,
  PRODUCT_IMAGE_LIST_SUCCESS,
  PRODUCT_IMAGE_LIST_FAIL,

} from '../constants/productConstants';

export const listProducts = ({
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
}) => async (dispatch, getState) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/listings?page=${pageNumber}&seller=${seller}&q=${name}&category=${category}&sub_category=${sub_category}&brand=${brand}&district=${district}&min=${min}&max=${max}&rating=${rating}&shortBy=${order}&status=${ad_status}`
      // ,      {
      //   headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
      // }
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const listAdminProducts = ({
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
}) => async (dispatch, getState) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/u/posts?page=${pageNumber}&seller=${seller}&q=${name}&category=${category}&sub_category=${sub_category}&brand=${brand}&district=${district}&min=${min}&max=${max}&rating=${rating}&shortBy=${order}&status=${ad_status}`
      , {
        headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
      }
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const listProductCategories = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/browse-by-categories`);
    dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data['data']['allcategories'] });
  } catch (error) {
    dispatch({ type: PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const listProductImages = () => async (dispatch, getState) => {
  dispatch({
    type: PRODUCT_IMAGE_LIST_REQUEST,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/u/posts/append-media-image`,
      {
        headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
      }
    );
    dispatch({ type: PRODUCT_IMAGE_LIST_SUCCESS, payload: data['ads_images'] });
  } catch (error) {
    dispatch({ type: PRODUCT_IMAGE_LIST_FAIL, payload: error.message });
  }
};

export const listProductSubCategories = (category) => async (dispatch) => {
  dispatch({
    type: PRODUCT_SUB_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/browse-by-categories/` + category);
    dispatch({ type: PRODUCT_SUB_CATEGORY_LIST_SUCCESS, payload: data['data']['allcategories'] });
  } catch (error) {
    dispatch({ type: PRODUCT_SUB_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/u/posts/edit/${productId}`,
    {
      headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
    });
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/u/posts/create`,
      product,
      {
        headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
      }
    );
    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: message });
  }
};
export const updateProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(`${process.env.REACT_APP_API_URL}/api/u/posts/edit/${product.id}`, product, {
      headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
    });
    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_UPDATE_FAIL, error: message });
  }
};
export const deleteProduct = (productId) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
  const {
    userSignin: { userInfo },
  } = getState();
  let formData = new FormData();
  formData.append('slug', productId);
  try {
    const { data } = Axios.post(`${process.env.REACT_APP_API_URL}/api/u/posts/delete`, formData, {
      headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
    },
    );
    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
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
}) => async (dispatch, getState) => {
  dispatch({
    type: fAVORITE_LIST_REQUEST,
  });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/u/posts/favorite-lists?pageNumber=${pageNumber}&seller=${seller}&q=${name}&category=${category}&sub_category=${sub_category}&brand=${brand}&district=${district}&min=${min}&max=${max}&rating=${rating}&shortBy=${order}`
      , {
        headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
      }
    );
    dispatch({ type: fAVORITE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: fAVORITE_LIST_FAIL, payload: error.message });
  }
};


export const saveFavorite = (productId) => async (dispatch, getState) => {
  dispatch({ type: SAVE_FAVORITE_REQUEST, payload: productId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/save-ad-as-favorite/${productId}`, {
      headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
    });
    dispatch({ type: SAVE_FAVORITE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SAVE_FAVORITE_FAIL, payload: message });
  }
};

export const createReview = (productId, review) => async (
  dispatch,
  getState
) => {
  dispatch({ type: PRODUCT_REVIEW_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/products/${productId}/reviews`,
      review,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: PRODUCT_REVIEW_CREATE_SUCCESS,
      payload: data.review,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_REVIEW_CREATE_FAIL, payload: message });
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

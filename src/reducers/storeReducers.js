const {
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
  STORE_LIST_FAIL,
  STORE_DETAILS_REQUEST,
  STORE_DETAILS_SUCCESS,
  STORE_DETAILS_FAIL,
  STORE_CREATE_REQUEST,
  STORE_CREATE_SUCCESS,
  STORE_CREATE_FAIL,
  STORE_CREATE_RESET,
  STORE_UPDATE_REQUEST,
  STORE_UPDATE_SUCCESS,
  STORE_UPDATE_FAIL,
  STORE_UPDATE_RESET,
  STORE_DELETE_REQUEST,
  STORE_DELETE_SUCCESS,
  STORE_DELETE_FAIL,
  STORE_DELETE_RESET,
  STORE_CATEGORY_LIST_REQUEST,
  STORE_CATEGORY_LIST_SUCCESS,
  STORE_CATEGORY_LIST_FAIL,
  STORE_REVIEW_CREATE_REQUEST,
  STORE_REVIEW_CREATE_SUCCESS,
  STORE_REVIEW_CREATE_FAIL,
  STORE_REVIEW_CREATE_RESET,
  STORE_SUB_CATEGORY_LIST_REQUEST,
  STORE_SUB_CATEGORY_LIST_SUCCESS,
  STORE_SUB_CATEGORY_LIST_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
} = require('../constants/storeConstants');

export const storeListReducer = (
  state = { loading: true, stores: [] },
  action
) => {
  switch (action.type) {
    case STORE_LIST_REQUEST:
      return { loading: true };
    case STORE_LIST_SUCCESS:
      return {
        loading: false,
        stores: action.payload,
        pages: action.payload.pages,
        page: action.payload.page,
        total:action.payload.total
      };
    case STORE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const storeCategoryListReducer = (
  state = { loading: true, stores: [] },
  action
) => {
  switch (action.type) {
    case STORE_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case STORE_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case STORE_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const storeSubCategoryListReducer = (
  state = { loading: true, stores: [] },
  action
) => {
  switch (action.type) {
    case STORE_SUB_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case STORE_SUB_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case STORE_SUB_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const storeDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case STORE_DETAILS_REQUEST:
      return { loading: true };
    case STORE_DETAILS_SUCCESS:
      return { loading: false, store: action.payload };
    case STORE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const storeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_CREATE_REQUEST:
      return { loading: true };
    case STORE_CREATE_SUCCESS:
      return { loading: false, success: true, store: action.payload };
    case STORE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case STORE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const storeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_UPDATE_REQUEST:
      return { loading: true };
    case STORE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case STORE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case STORE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const storeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_DELETE_REQUEST:
      return { loading: true };
    case STORE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case STORE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case STORE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
export const storeReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_REVIEW_CREATE_REQUEST:
      return { loading: true };
    case STORE_REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, favorite: action.payload };
    case STORE_REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case STORE_REVIEW_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const getDataByCategory = (state = { loading: true }, action) => {
  switch (action.type) {
    case  GET_DATA_REQUEST:
      return { loading: true };
    case  GET_DATA_SUCCESS:
      return { loading: false, datas: action.payload };
    case  GET_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

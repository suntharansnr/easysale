const {
  PAYMENT_LIST_REQUEST,
  PAYMENT_LIST_SUCCESS,
  PAYMENT_LIST_FAIL,
  PAYMENT_DETAILS_REQUEST,
  PAYMENT_DETAILS_SUCCESS,
  PAYMENT_DETAILS_FAIL,
  PAYMENT_CREATE_REQUEST,
  PAYMENT_CREATE_SUCCESS,
  PAYMENT_CREATE_FAIL,
  PAYMENT_CREATE_RESET,
  PAYMENT_UPDATE_REQUEST,
  PAYMENT_UPDATE_SUCCESS,
  PAYMENT_UPDATE_FAIL,
  PAYMENT_UPDATE_RESET,
  PAYMENT_DELETE_REQUEST,
  PAYMENT_DELETE_SUCCESS,
  PAYMENT_DELETE_FAIL,
  PAYMENT_DELETE_RESET,
  PAYMENT_CATEGORY_LIST_REQUEST,
  PAYMENT_CATEGORY_LIST_SUCCESS,
  PAYMENT_CATEGORY_LIST_FAIL,
  PAYMENT_REVIEW_CREATE_REQUEST,
  PAYMENT_REVIEW_CREATE_SUCCESS,
  PAYMENT_REVIEW_CREATE_FAIL,
  PAYMENT_REVIEW_CREATE_RESET,
  PAYMENT_SUB_CATEGORY_LIST_REQUEST,
  PAYMENT_SUB_CATEGORY_LIST_SUCCESS,
  PAYMENT_SUB_CATEGORY_LIST_FAIL,
  SAVE_FAVORITE_REQUEST,
  SAVE_FAVORITE_SUCCESS,
  SAVE_FAVORITE_FAIL,
  SAVE_FAVORITE_RESET,
  fAVORITE_LIST_REQUEST,
  fAVORITE_LIST_SUCCESS,
  fAVORITE_LIST_FAIL,
} = require('../constants/paymentConstants');

export const paymentListReducer = (
  state = { loading: true, payments: [] },
  action
) => {
  switch (action.type) {
    case PAYMENT_LIST_REQUEST:
      return { loading: true };
    case PAYMENT_LIST_SUCCESS:
      return {
        loading: false,
        payments: action.payload.payments.data,
        brands: action.payload.brands,
        categories:action.payload.categories,
        sub_categories:action.payload.sub_categories,
        districts:action.payload.districts,
        cities:action.payload.cities,
        pages: action.payload.pages,
        page: action.payload.page,
        total:action.payload.payments.total
      };
    case PAYMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const paymentCategoryListReducer = (
  state = { loading: true, payments: [] },
  action
) => {
  switch (action.type) {
    case PAYMENT_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case PAYMENT_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case PAYMENT_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const paymentSubCategoryListReducer = (
  state = { loading: true, payments: [] },
  action
) => {
  switch (action.type) {
    case PAYMENT_SUB_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case PAYMENT_SUB_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case PAYMENT_SUB_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const paymentDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case PAYMENT_DETAILS_REQUEST:
      return { loading: true };
    case PAYMENT_DETAILS_SUCCESS:
      return { loading: false, payment: action.payload.payment };
    case PAYMENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const paymentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_CREATE_REQUEST:
      return { loading: true };
    case PAYMENT_CREATE_SUCCESS:
      return { loading: false, success: true, payment: action.payload };
    case PAYMENT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PAYMENT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const paymentUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_UPDATE_REQUEST:
      return { loading: true };
    case PAYMENT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PAYMENT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PAYMENT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const paymentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_DELETE_REQUEST:
      return { loading: true };
    case PAYMENT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PAYMENT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PAYMENT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
export const paymentReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_REVIEW_CREATE_REQUEST:
      return { loading: true };
    case PAYMENT_REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, favorite: action.payload };
    case PAYMENT_REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PAYMENT_REVIEW_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const favoriteListReducer = (
  state = { loading: true, payments: [] },
  action
) => {
  switch (action.type) {
    case fAVORITE_LIST_REQUEST:
      return { loading: true };
    case fAVORITE_LIST_SUCCESS:
      return {
        loading: false,
        payments: action.payload.ads.data,
        brands: action.payload.brands,
        categories:action.payload.categories,
        sub_categories:action.payload.sub_categories,
        districts:action.payload.districts,
        cities:action.payload.cities,
        pages: action.payload.pages,
        page: action.payload.page,
        total:action.payload.ads.total
      };
    case fAVORITE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const saveFavoriteReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_FAVORITE_REQUEST:
      return { loading: true };
    case SAVE_FAVORITE_SUCCESS:
      return { loading: false, success: true, favorite: action.payload };
    case SAVE_FAVORITE_FAIL:
      return { loading: false, error: action.payload };
    case SAVE_FAVORITE_RESET:
      return {};
    default:
      return state;
  }
};

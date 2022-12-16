const {
  PACKAGE_LIST_REQUEST,
  PACKAGE_LIST_SUCCESS,
  PACKAGE_LIST_FAIL,
  PACKAGE_DETAILS_REQUEST,
  PACKAGE_DETAILS_SUCCESS,
  PACKAGE_DETAILS_FAIL,
  PACKAGE_CREATE_REQUEST,
  PACKAGE_CREATE_SUCCESS,
  PACKAGE_CREATE_FAIL,
  PACKAGE_CREATE_RESET,
  PACKAGE_UPDATE_REQUEST,
  PACKAGE_UPDATE_SUCCESS,
  PACKAGE_UPDATE_FAIL,
  PACKAGE_UPDATE_RESET,
  PACKAGE_DELETE_REQUEST,
  PACKAGE_DELETE_SUCCESS,
  PACKAGE_DELETE_FAIL,
  PACKAGE_DELETE_RESET,
  PACKAGE_CATEGORY_LIST_REQUEST,
  PACKAGE_CATEGORY_LIST_SUCCESS,
  PACKAGE_CATEGORY_LIST_FAIL,
  PACKAGE_REVIEW_CREATE_REQUEST,
  PACKAGE_REVIEW_CREATE_SUCCESS,
  PACKAGE_REVIEW_CREATE_FAIL,
  PACKAGE_REVIEW_CREATE_RESET,
  PACKAGE_SUB_CATEGORY_LIST_REQUEST,
  PACKAGE_SUB_CATEGORY_LIST_SUCCESS,
  PACKAGE_SUB_CATEGORY_LIST_FAIL,
  SAVE_FAVORITE_REQUEST,
  SAVE_FAVORITE_SUCCESS,
  SAVE_FAVORITE_FAIL,
  SAVE_FAVORITE_RESET,
  fAVORITE_LIST_REQUEST,
  fAVORITE_LIST_SUCCESS,
  fAVORITE_LIST_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
} = require('../constants/packageConstants');

export const packageListReducer = (
  state = { loading: true, packages: [] },
  action
) => {
  switch (action.type) {
    case PACKAGE_LIST_REQUEST:
      return { loading: true };
    case PACKAGE_LIST_SUCCESS:
      return {
        loading: false,
        packages: action.payload.membership_packages,
      };
    case PACKAGE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const packageCategoryListReducer = (
  state = { loading: true, packages: [] },
  action
) => {
  switch (action.type) {
    case PACKAGE_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case PACKAGE_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case PACKAGE_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const packageSubCategoryListReducer = (
  state = { loading: true, packages: [] },
  action
) => {
  switch (action.type) {
    case PACKAGE_SUB_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case PACKAGE_SUB_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case PACKAGE_SUB_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const packageDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case PACKAGE_DETAILS_REQUEST:
      return { loading: true };
    case PACKAGE_DETAILS_SUCCESS:
      return { loading: false, package: action.payload };
    case PACKAGE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const packageCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PACKAGE_CREATE_REQUEST:
      return { loading: true };
    case PACKAGE_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case PACKAGE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PACKAGE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const packageUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PACKAGE_UPDATE_REQUEST:
      return { loading: true };
    case PACKAGE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PACKAGE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PACKAGE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const packageDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PACKAGE_DELETE_REQUEST:
      return { loading: true };
    case PACKAGE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PACKAGE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PACKAGE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
export const packageReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PACKAGE_REVIEW_CREATE_REQUEST:
      return { loading: true };
    case PACKAGE_REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, favorite: action.payload };
    case PACKAGE_REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PACKAGE_REVIEW_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const favoriteListReducer = (
  state = { loading: true, packages: [] },
  action
) => {
  switch (action.type) {
    case fAVORITE_LIST_REQUEST:
      return { loading: true };
    case fAVORITE_LIST_SUCCESS:
      console.log(action.payload.ads.data)
      return {
        loading: false,
        packages: action.payload.ads.data,
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

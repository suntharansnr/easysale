const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_RESET,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_SUCCESS,
  PRODUCT_CATEGORY_LIST_FAIL,
  PRODUCT_IMAGE_LIST_REQUEST,
  PRODUCT_IMAGE_LIST_SUCCESS,
  PRODUCT_IMAGE_LIST_FAIL,
  PRODUCT_REVIEW_CREATE_REQUEST,
  PRODUCT_REVIEW_CREATE_SUCCESS,
  PRODUCT_REVIEW_CREATE_FAIL,
  PRODUCT_REVIEW_CREATE_RESET,
  PRODUCT_SUB_CATEGORY_LIST_REQUEST,
  PRODUCT_SUB_CATEGORY_LIST_SUCCESS,
  PRODUCT_SUB_CATEGORY_LIST_FAIL,
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
} = require('../constants/productConstants');

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.ads.data,
        brands: action.payload.brands,
        categories:action.payload.categories,
        sub_categories:action.payload.sub_categories,
        districts:action.payload.districts,
        cities:action.payload.cities,
        links: action.payload.ads.links,
        page: action.payload.ads.current_page,
        total:action.payload.ads.total
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCategoryListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case PRODUCT_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productImageListReducer = (
  state = { loading: true, images: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_IMAGE_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_IMAGE_LIST_SUCCESS:
      return { loading: false, images: action.payload };
    case PRODUCT_IMAGE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productSubCategoryListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_SUB_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_SUB_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case PRODUCT_SUB_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false,success:true, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, errors: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_REVIEW_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, favorite: action.payload };
    case PRODUCT_REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_REVIEW_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const favoriteListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case fAVORITE_LIST_REQUEST:
      return { loading: true };
    case fAVORITE_LIST_SUCCESS:
      console.log(action.payload.ads.data)
      return {
        loading: false,
        products: action.payload.ads.data,
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
      return { loading: false,success:true, datas: action.payload };
    case  GET_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

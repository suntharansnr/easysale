const {
  DISTRICT_LIST_REQUEST,
  DISTRICT_LIST_SUCCESS,
  DISTRICT_LIST_FAIL,
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS,
  GET_CITY_FAIL,
} = require('../constants/locationConstants');

export const districtListReducer = (
  state = { loading: true, districts: [] },
  action
) => {
  switch (action.type) {
    case DISTRICT_LIST_REQUEST:
      return { loading: true };
    case DISTRICT_LIST_SUCCESS:
      return {
        loading: false,
        districts:action.payload,
      };
    case DISTRICT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getCityByDistrict = (state = { loading: true }, action) => {
  switch (action.type) {
    case  GET_CITY_REQUEST:
      return { loading: true };
    case  GET_CITY_SUCCESS:
      return { loading: false, cities: action.payload };
    case  GET_CITY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

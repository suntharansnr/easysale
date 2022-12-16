const {
  DASHBOARD_LIST_REQUEST,
  DASHBOARD_LIST_SUCCESS,
  DASHBOARD_LIST_FAIL,
} = require('../constants/dashboardConstants');

export const dashboardListReducer = (
  state = { loading: true, metrics: [] },
  action
) => {
  switch (action.type) {
    case DASHBOARD_LIST_REQUEST:
      return { loading: true };
    case DASHBOARD_LIST_SUCCESS:
      return {
        loading: false,
        metrics:action.payload,
      };
    case DASHBOARD_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

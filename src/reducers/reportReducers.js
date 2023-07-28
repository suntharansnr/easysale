import { REPORT_DETAILS_FAIL } from '../constants/reportConstants';
import { REPORT_DETAILS_SUCCESS } from '../constants/reportConstants';
import { REPORT_DETAILS_REQUEST } from '../constants/reportConstants';

const {
  REPORT_LIST_REQUEST,
  REPORT_LIST_SUCCESS,
  REPORT_LIST_FAIL,
  REPORT_DELETE_REQUEST,
  REPORT_DELETE_SUCCESS,
  REPORT_DELETE_FAIL,
  REPORT_DELETE_RESET,
} = require('../constants/reportConstants');

export const reportListReducer = (
  state = { loading: true, reports: [] },
  action
) => {
  switch (action.type) {
    case REPORT_LIST_REQUEST:
      return { loading: true };
    case REPORT_LIST_SUCCESS:
      return {
        loading: false,
        reports: action.payload.reports.data,
      };
    case REPORT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const reportDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case REPORT_DETAILS_REQUEST:
      return { loading: true };
    case REPORT_DETAILS_SUCCESS:
      return { loading: false, report: action.payload };
    case REPORT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const reportDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case REPORT_DELETE_REQUEST:
      return { loading: true };
    case REPORT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case REPORT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case REPORT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};


import Axios from 'axios';
import {
  REPORT_DETAILS_FAIL,
  REPORT_DETAILS_REQUEST,
  REPORT_DETAILS_SUCCESS,

  REPORT_LIST_FAIL,
  REPORT_LIST_REQUEST,
  REPORT_LIST_SUCCESS,

  REPORT_DELETE_REQUEST,
  REPORT_DELETE_FAIL,
  REPORT_DELETE_SUCCESS,
} from '../constants/reportConstants';

export const listReports = ({pageNumber = ''}) => async (dispatch, getState) => {
  dispatch({
    type: REPORT_LIST_REQUEST,
  });
  const { userSignin: { userInfo }} = getState();
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/reports?page=${pageNumber}`
      ,{
        headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
      }
    );
    dispatch({ type: REPORT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REPORT_LIST_FAIL, payload: error.message });
  }
};

export const detailsReport = (reportId) => async (dispatch, getState) => {
  dispatch({ type: REPORT_DETAILS_REQUEST, payload: reportId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/u/posts/edit/${reportId}`,
    {
      headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
    });
    dispatch({ type: REPORT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REPORT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteReport = (reportId) => async (dispatch, getState) => {
  dispatch({ type: REPORT_DELETE_REQUEST, payload: reportId });
  const { userSignin: { userInfo }} = getState();
  let formData = new FormData();
  formData.append('id', reportId);
  try {
    const { data } = Axios.post(`${process.env.REACT_APP_API_URL}/api/reports/delete-reports`, formData, {
      headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
    },
    );
    dispatch({ type: REPORT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REPORT_DELETE_FAIL, payload: message });
  }
};

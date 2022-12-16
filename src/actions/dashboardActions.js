import Axios from 'axios';
import {
  DASHBOARD_LIST_FAIL,
  DASHBOARD_LIST_REQUEST,
  DASHBOARD_LIST_SUCCESS,
} from '../constants/dashboardConstants';

export const listDashboard = () => async (dispatch, getState) => {
  dispatch({
    type: DASHBOARD_LIST_REQUEST,
  });

  const {
    userSignin: { userInfo },
  } = getState();

  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_URL}/api/dashboard`,{
      headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
    });
    dispatch({ type: DASHBOARD_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DASHBOARD_LIST_FAIL, payload: error.message });
  }
};

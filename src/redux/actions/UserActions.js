import {
  CREATE_USER,
  UPATE_USER_BY_ID,
  DELETE_USER_BY_ID,
  FETCH_USER_BY_ID,
  FETCH_USER,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from "../actionTypes";
import * as userApi from "../../api/userApi";
export const createUser = user => {
  return {
    type: CREATE_USER,
    payload: user
  };
};
export const updateUserById = user => {
  return {
    type: UPATE_USER_BY_ID,
    payload: user
  };
};
export const deleteUserById = id => {
  return {
    type: DELETE_USER_BY_ID,
    payload: { id }
  };
};
export const fetchUserById = id => {
  return {
    type: FETCH_USER_BY_ID,
    payload: { id }
  };
};
export const fetchUser = params => async dispatch => {
  try {
    dispatch({ type: FETCH_USER_PENDING });
    let response = await userApi.fetchUser(params);
    dispatch({ type: FETCH_USER_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: FETCH_USER_ERROR, payload: error });
  }
};

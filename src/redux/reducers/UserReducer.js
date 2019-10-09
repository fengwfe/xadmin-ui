import {
  CREATE_USER,
  UPATE_USER_BY_ID,
  DELETE_USER_BY_ID,
  FETCH_USER_BY_ID,
  FETCH_USER_SUCCESS
} from "../actionTypes";
const userReducer = (
  state = {
    userList: { data: [], page: 0, total: 0, total_pages: 0, per_page: 5 }
  },
  action
) => {
  switch (action.type) {
    case CREATE_USER: {
      let userList = [...state.userList, action.payload];
      return { ...state, userList: userList };
    }
    case UPATE_USER_BY_ID: {
      return state;
    }
    case DELETE_USER_BY_ID: {
      return state;
    }
    case FETCH_USER_BY_ID: {
      return { ...state, test: "fuwu" };
    }
    case FETCH_USER_SUCCESS: {
      return { ...state, userList: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;

const dummyUser = {
  nickname: "고수",
  Post: [],
  Followings: [],
  Followers: [],
  signUpdate: {}
};

export const intialState = {
  isLoggedIn: false,
  user: null
}; // store

export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN"; // 액션의 이름
export const LOG_OUT = "LOG_OUT";

export const signUpAction = data => {
  return {
    type: SIGN_UP,
    data: data
  };
};

export const loginAction = {
  type: LOG_IN
};
export const logoutAction = {
  type: LOG_OUT
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpdate: action.data
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;

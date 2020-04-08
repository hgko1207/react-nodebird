export const intialState = {
  isLoggedIn: false,
  user: {},
}; // store

const LOG_IN = "LOG_IN"; // 액션의 이름
const LOG_OUT = "LOG_OUT";

const loginAction = {
  type: LOG_IN,
  data: {
    nickname: "고수",
  },
};
const logoutAction = {
  type: LOG_OUT,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;

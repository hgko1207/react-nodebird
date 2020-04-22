export const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "hgko",
      },
      content: "테스트",
      img:
        "https://www.bloter.net/wp-content/uploads/2016/08/%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0-%EC%82%AC%EC%A7%84.jpg",
    },
  ],
  imagePaths: [],
};

export const ADD_POST = "ADD_POST";
export const ADD_DUMMY = "ADD_DUMMY";

export const addPost = {
  type: ADD_POST,
};

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "Hello",
    UserId: 1,
    User: {
      nickname: "고수",
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
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

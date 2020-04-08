import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector, connect } from "react-redux";
import { loginAction } from "../reducers/user";

const dummy = {
  isLoggedIn: true,
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "hgko",
      },
      content: "첫 번째 게시글",
      img:
        "https://www.bloter.net/wp-content/uploads/2016/08/%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0-%EC%82%AC%EC%A7%84.jpg",
    },
  ],
};

// hook 방식
const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loginAction);
  }, []);

  return (
    <div>
      {user ? <div>로그인 했습니다: {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c) => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;

// high order component 방식
// const Home = ({ data, dispatch, login }) => {
//   const { user } = data;
//   useEffect(() => {
//     login();
//   }, []);

//   return (
//     <div>
//       {user ? <div>로그인 했습니다: {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
//       {dummy.isLoggedIn && <PostForm />}
//       {dummy.mainPosts.map((c) => {
//         return <PostCard key={c} post={c} />;
//       })}
//     </div>
//   );
// };

// function mapStateToProps(state) {
//   return {
//     data: state.user,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     login: () => dispatch(loginAction),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

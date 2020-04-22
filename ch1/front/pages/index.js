import React from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useSelector, connect } from "react-redux";

// hook 방식
const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => {
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

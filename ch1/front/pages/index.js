import React from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

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

const Home = () => {
  return (
    <>
      <div>
        {dummy.isLoggedIn && <PostForm />}
        {dummy.mainPosts.map((c) => {
          return <PostCard key={c} post={c} />;
        })}
      </div>
    </>
  );
};

export default Home;

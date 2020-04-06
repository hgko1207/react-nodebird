import React from "react";
import { Form, Input, Button, Card, Avatar } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
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
        {dummy.isLoggedIn && (
          <Form encType="multipart/form-data" style={{ marginBottom: 20 }}>
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
            <div>
              <Input type="file" multiple hidden />
              <Button>이미지 업로드</Button>
              <Button type="primary" style={{ float: "right" }} htmlType="submit">
                짹짹
              </Button>
            </div>
            <div>
              {dummy.imagePaths.map((v, i) => {
                return (
                  <div key={v} style={{ display: "inline-block" }}>
                    <img src={"http:localhost:3065/" + v} style={{ width: "200px" }} alt={v} />
                    <div>
                      <Button>제거</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Form>
        )}
        {dummy.mainPosts.map((c) => {
          return (
            <Card
              key={+c.createdAt}
              cover={c.img && <img alt="example" src={c.img} />}
              actions={[
                <RetweetOutlined />,
                <HeartOutlined />,
                <MessageOutlined />,
                <EllipsisOutlined />,
              ]}
              extra={<Button>팔로우</Button>}
            >
              <Card.Meta
                avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
                title={c.User.nickname}
                description={c.content}
              />
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Home;

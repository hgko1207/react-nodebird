import React from "react";
import { Button, Form, Input } from "antd";

const NicknameEditForm = () => {
  return (
    <>
      <Form style={{ margin: "20px 0", border: "1px solid #d9d9d9", padding: "20px" }}>
        <Input addonBefore="닉네임" />
        <Button style={{ marginTop: 10 }} type="primary">
          수정
        </Button>
      </Form>
    </>
  );
};

export default NicknameEditForm;

import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Form, Input, Checkbox, Button } from "antd";

const Signup = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);

  const onSubmit = () => {};
  const onChangeId = e => {
    setId(e.target.value);
  };
  const onChangeNick = e => {
    setNick(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = e => {
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = e => {
    setTerm(e.target.value);
  };

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="uesr-id">아이디</label>
            <br />
            <Input name="uesr-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="uesr-nick">닉네임</label>
            <br />
            <Input name="uesr-nick" value={nick} required onChange={onChangeNick} />
          </div>
          <div>
            <label htmlFor="uesr-password">비밀번호</label>
            <br />
            <Input
              name="uesr-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="uesr-password-check">비밀번호체크</label>
            <br />
            <Input
              name="uesr-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
          </div>
          <div>
            <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
              정보제공에 동의합니다.
            </Checkbox>
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              회원가입
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;

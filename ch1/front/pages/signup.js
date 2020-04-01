import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Form, Input, Checkbox, Button } from "antd";

const Signup = () => {
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
  };

  const onChangeNick = e => {
    setNick(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = e => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = e => {
    setTermError(e.target.checked);
    setTerm(e.target.checked);
  };

  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = e => {
      setter(e.target.value);
    };
    return [value, handler];
  };

  const [id, onChangeId] = useInput("");

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
      </Head>
      <AppLayout>
        <Form onSubmitCapture={onSubmit} style={{ padding: 15 }}>
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
            {passwordError && <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              정보제공에 동의합니다.
            </Checkbox>
            {termError && <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;

import React, { useState, useCallback } from "react";
import { Form, Input, Checkbox, Button } from "antd";

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
    },
    [password, passwordCheck, term]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
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
    </>
  );
};

export default Signup;

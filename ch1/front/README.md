# React-NodeBird

## Start

```bash
npm i
```

## Install

```bash
npm i react react-dom
npm i next
npm i -D nodemon webpack
npm i -D eslint
npm i -D eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
npm i prop-types

// ant design
npm i antd
npm i --save @ant-design/icons

// redux
npm i redux react-redux
npm i next-redux-wrapper
npm i react-redux@next

// redux saga
npm i redux-saga
```

## Features

- Next
- React Hooks
- prop-types
- antd design
- custom hook
- eslint
- Redux

## Next

- Link를 사용해 Router 기능을 대체한다.
- 코드 스플리팅이 자동으로 된다.

## Next 내장 파일

\_document.js, \_app.js, \_error.js 파일은 내장되어 있다.

- \_document.js : html, head, body
- \_app.js : root
- \_error.js : 에러 화면
- pages : 실제 컴포넌트

## React Hooks

- useCallback : 자식 컴포넌트에 넘기는 함수는 무조건 사용
- useState
- react-redux 7.1.0 부터 redux hook을 사용할 수 있음

## eslint

- 코딩 규칙을 정할 수 있다.
- 협업을 위해 사용한다.

## prop-types

- 자료형을 정의
- https://www.npmjs.com/package/prop-types

## Redux

- Redux (state) -> React의 state는 쓰지 않아도 된다.
- 안정성, state 통제가 용이하기 때문에 사용
- Action -> state를 바꾸는 행동 ex) 로그인 액션
- Dispatch -> Action을 실행 ex) 로그인 액션 dispatch
- Reducer -> Action의 결과로 state를 어떻게 바꿀지 정의
- ex) 로그인 액션 dispatch 시 -> state 변경
- Redux 설계 시 하나의 파일에 너무 많은 코드를 넣지 말고 분리하면 좋다.
- 미들웨어는 액션과 스토어 사이에서 동작한다.

## Redux-saga

- 비동기 동작을 적용하기 위해 사용

## Generator(제너레이터)

함수 실행을 중간에 멈출 수 있고 원할 때 재개할 수 있어 편하다.

```js
function* generator() {}
```

## ant design

- Icon

  ```js
  import { StarOutlined } from '@ant-design/icons';

  <StarOutlined />;
  ```

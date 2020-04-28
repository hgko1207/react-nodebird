import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

const NodeBird = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

// custom middleware
// const middleware = (store) => (next) => (action) => {
//   console.log(action); // 다른 작업들을 여기에
//   next(action);
// };

// hoc(high order component)
// connect(mapStateToProps)(Component);
// const connect = (mapStateToProps) => (Compoment) => () => {
//   console.log("I'm hoc");
//   return <Component props={mapStateToProps()} />;
// };

export default withRedux((initialState, options) => {
  // 여기에다가 store 커스터마이징
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  // 개발 중일 때만 redux devtools 사용할 수 있도록
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
        );

  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
})(NodeBird);

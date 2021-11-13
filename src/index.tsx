/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

const render = () => {
   const App = require('./App').default;
   ReactDOM.render(
      <Provider store={store}>
         <App />
      </Provider>,
      document.getElementById('root')
   );
};

render();

if (module.hot) {
   module.hot.accept('./App', render);
}

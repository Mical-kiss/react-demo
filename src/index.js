import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* react-router */
// import App from './demo_context';
// import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

/* redux */
// import App from './demo_redux1'
// import store from './redux/store'

/* react-redux */
import { Provider } from 'react-redux'
import App from './demo_redux2'
import store from './react-redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <Provider store={store}>
      <App></App>
    </Provider>
    {/* <App></App> */}
  </>
);

/* store.subscribe(() => {
  root.render(
    <>
      <App></App>
    </>
  );
}) */

reportWebVitals();

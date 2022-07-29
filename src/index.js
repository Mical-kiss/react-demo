import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* react-router */
// import App from './demo_context';
// import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

/* react-redux */
import { Provider } from 'react-redux'
import App from './demo_redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <Provider store={store}>
      <App></App>
    </Provider>
  </>
);

reportWebVitals();

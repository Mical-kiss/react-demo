import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

/* react-router */
// import App from './demo_context';
// import { BrowserRouter } from 'react-router-dom';

/* redux */
import App from './demo_redux1'
import store from './redux/store'

/* react-redux */
// import { Provider } from 'react-redux'
// import App from './demo_redux2'
// import store from './react-redux/store'

/* useCallback */
// import App from './demo_useCallback'

/* scopeSlot */
// import App from './demo_scopeSlot'
/* self-hook */
// import App from './demo_selfHook'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    {/* <Provider store={store}>
      <App></App>
    </Provider> */}
    <App></App>
  </>
);

store.subscribe(() => {
  root.render(
    <>
      <App></App>
    </>
  );
})

reportWebVitals();

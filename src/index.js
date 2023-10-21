import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';  

import store from './store';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

//create components using React.lazy
const ShopTheme = React.lazy(() => import('./themes/shopTheme'));
const DarkTheme = React.lazy(() => import('./themes/darkTheme'));

//create a parent component that will load the components conditionally using React.Suspense
const ThemeSelector = ({ children }) => {
  return (
    <>
      <React.Suspense fallback={<></>}>
        {window.location.pathname.startsWith('/store') ? <ShopTheme /> : <DarkTheme/>}
      </React.Suspense>
      {children}
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <ToastContainer />
    <ThemeSelector>
    <App />
    </ThemeSelector>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

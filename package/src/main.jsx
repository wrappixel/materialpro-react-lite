import React ,{ Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "./assets/scss/style.scss";
import Loader from "./layouts/loader/Loader";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <Suspense fallback={<Loader />}>
      <App />
  </Suspense>
)

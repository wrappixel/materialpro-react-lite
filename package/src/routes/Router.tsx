

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import("../views/dashboard/page")))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));


// const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
// const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/',exact: true ,element: <Dashboard/> },
      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },

    ],
  },
];

const router = createBrowserRouter(Router);
export default router;

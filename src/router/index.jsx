import { useMediaQuery } from '@mui/material';
import { lazy, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout } from 'src/layouts';
// import CustomAuthLoginPage from 'src/pages/auth/custom/login';
import { Layout as LayoutBase } from "src/layouts/base";

const CustomAuthLoginPage = lazy(() => import('src/pages/auth/custom/login'));
const HomePage = lazy(() => import('src/pages/index'));
const PageExample = lazy(() => import('src/pages/page-example'));
const Error404Page = lazy(() => import('src/pages/404'));
const App = () => {
  const navigate = useNavigate();
  const isMobileDevice = useMediaQuery('(max-width: 768px)');

};

export const routesOutlets = [
  // {
  //   path: '/',
  //   element:
  //     <Layout>
  //       <CustomAuthLoginPage />
  //     </Layout>, // 将 App 组件作为路由元素
  //   children: [
  //     {
  //       index: true,
  //       element: <HomePage />,
  //     },
  //   ]

  // },


  {
    element:
      <Layout>
        <Outlet />
      </Layout>, // 将 App 组件作为路由元素
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <CustomAuthLoginPage />,
      },

      // {
      //   path: 'page-example',
      //   element: <PageExample />,
      // },

    ],
  },
  {
    path: '*',
    element: <Error404Page />,
  },
];

import React from 'react';
import { SmileOutlined } from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/app1',
        name: 'app1',
        icon: <SmileOutlined />,
        component: './Welcome',
      },
      {
        path: '/app2',
        name: 'app2',
        icon: <SmileOutlined />,
        component: './Welcome',
      },
      {
        path: '/app3',
        name: 'app3',
        icon: <SmileOutlined />,
        // component: './A',
      },
      {
        path: '/app4',
        name: 'app4',
        icon: <SmileOutlined />,
        // component: './A',
      },
    ],
  },
  location: {
    pathname: '/',
  },
};

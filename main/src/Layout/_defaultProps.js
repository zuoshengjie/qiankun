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
    ],
  },
  location: {
    pathname: '/',
  },
};

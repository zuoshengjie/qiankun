import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Switch, useHistory, Link } from 'react-router-dom';
import ProLayout from '@ant-design/pro-layout';
import { RouteWithSubRoutes } from '../index';
import defaultProps from './_defaultProps';

import styles from './index.module.less';

const Main = (props) => {
  const { children } = props;
  let history = useHistory();
  const { location } = history;
  const { pathname } = location;

  // useEffect(() => {
  //   console.log(pathName, 'pathName');
  //   history.push(pathName);
  // }, [pathName, history]);
    console.log(pathname,'pathname');
    return (
    <div className={styles['layout-wraper']}>
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: 'Pro Layout',
        }}
        menuFooterRender={(props) => {
          return (
            <a
              style={{
                lineHeight: '48rpx',
                display: 'flex',
                height: 48,
                color: 'rgba(255, 255, 255, 0.65)',
                alignItems: 'center',
              }}
              href="https://preview.pro.ant.design/dashboard/analysis"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="pro-logo"
                src="https://procomponents.ant.design/favicon.ico"
                style={{
                  width: 16,
                  height: 16,
                  margin: '0 16px',
                  marginRight: 10,
                }}
              />
              {!props?.collapsed && 'Preview Pro'}
            </a>
          );
        }}
        onMenuHeaderClick={(e) => history.push('/')}
        menuItemRender={(item, dom) => (
          <Link
              to={item.path || '/'}
            // onClick={() => {
            //   setPathName(item.path || '/');
            // }}
          >
            {dom}
          </Link>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
      >
        <div id="children-wrapper">
            {
                children
            }
        </div>
      </ProLayout>
    </div>
  );
};

export default Main;

import React, { useEffect } from 'react';
import { loadMicroApp } from 'qiankun';

const Index = () => {
  useEffect(() => {
    // 挂载子应用方式二
    loadMicroApp({
      name: 'app1',
      entry: '//localhost:3001',
      container: '#app1',
    });
  }, []);
  return <div id="app1" />;
};

export default Index;

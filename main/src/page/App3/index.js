import React, { useEffect } from 'react';
import { loadMicroApp } from 'qiankun';

const Index = () => {
  useEffect(() => {
    // loadMicroApp({
    //     name: 'app2',
    //     // entry: '//localhost:3002',
    //     entry: '/children/app2/',
    //     container: '#app2',
    // });
  }, []);
  return <div>app3333</div>;
};

export default Index;

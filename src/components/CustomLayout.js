// src/components/CustomLayout.js
import Layout from '@theme/Layout';
import GiscusComments from 'GiscusComments';
import React from 'react';
const CustomLayout = ({ children, customComments }) => {
  return (
    <Layout>
      {children}
      {customComments && <GiscusComments />}
    </Layout>
  );
};

export default CustomLayout;

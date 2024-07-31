// src/components/PageWrapper.js
import Layout from '@theme/Layout';
import React from 'react';
import GiscusComments from '../components/GiscusComments';
const PageWrapper = ({ children, frontMatter }) => {
  return (
    <Layout>
      {children}
      {frontMatter.custom_comments && <GiscusComments />}
    </Layout>
  );
};

export default PageWrapper;

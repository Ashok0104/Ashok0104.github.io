// src/pages/DeployYourSitePage.js
import React from 'react';
import Layout from '@theme/Layout';
import MarkdownWithComments from '@site/src/components/MarkdownWithComments';
import deployYourSiteMd from '@site/docs/tutorial-basics/deploy-your-site.md';

const DeployYourSitePage = () => {
  return (
    <Layout>
      <h1>Deploy Your Site</h1>
      <MarkdownWithComments content={deployYourSiteMd} />
    </Layout>
  );
};

export default DeployYourSitePage;

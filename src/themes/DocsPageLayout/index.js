// src/theme/DocsPageLayout/index.js

import React from 'react';
import DocPageContent from '@theme/DocPageContent';
import Giscus from '@site/src/components/Giscus';

function DocsPageLayout(props) {
  const { frontMatter } = props;

  return (
    <>
      <DocPageContent {...props} />
      {frontMatter.custom_comments && <Giscus />}
    </>
  );
}

export default DocsPageLayout;

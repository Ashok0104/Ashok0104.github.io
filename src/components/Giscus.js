// src/components/Giscus.js

import React from 'react';

const Giscus = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.dataset.repo = 'Ashok0104/Ashok0104.github.io';
    script.dataset.repoId = 'R_kgDOMKVgYg';
    script.dataset.category = 'Show and tell';
    script.dataset.categoryId = 'DIC_kwDOMKVgYs4ChTXm';
    script.dataset.mapping = 'pathname';
    script.dataset.strict = '0';
    script.dataset.reactionsEnabled = '1';
    script.dataset.emitMetadata = '1';
    script.dataset.inputPosition = 'top';
    script.dataset.theme = 'preferred_color_scheme';
    script.dataset.lang = 'en';
    script.dataset.loading = 'lazy';
    script.crossOrigin = 'anonymous';
    script.async = true;
    document.getElementById('giscus-container').appendChild(script);
  }, []);

  return (
    <div id="giscus-container"></div>
  );
};

export default Giscus;

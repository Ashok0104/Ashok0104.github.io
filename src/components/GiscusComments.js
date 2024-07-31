// src/components/GiscusComments.js
import React, { useEffect } from 'react';

const GiscusComments = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'Ashok0104/Ashok0104.github.io');
    script.setAttribute('data-repo-id', 'R_kgDOMKVgYg');
    script.setAttribute('data-category', 'Show and tell');
    script.setAttribute('data-category-id', 'DIC_kwDOMKVgYs4ChTXm');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '1');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const container = document.getElementById('giscus-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  return <div id="giscus-container" />;
};

export default GiscusComments;

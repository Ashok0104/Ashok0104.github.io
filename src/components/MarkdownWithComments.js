// src/components/MarkdownWithComments.js
import React from 'react';
import ReactMarkdown from 'react-markdown'; // Ensure the correct import
import GiscusComments from './GiscusComments';

const MarkdownWithComments = ({ content }) => {
  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown> {/* Ensure ReactMarkdown is used correctly */}
      <GiscusComments />
    </div>
  );
};

export default MarkdownWithComments;

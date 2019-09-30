import React from 'react';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/default.css';
import { InlineMath, BlockMath } from 'react-katex';
import Highlight from 'react-highlight';

export const MarkdownRender = (props) => {
  const newProps = {
    ...props,
    plugins: [
      RemarkMathPlugin,
    ],
    renderers: {
      ...props.renderers,
      math: ({ value }) => <BlockMath>{ value }</BlockMath>,
      inlineMath: ({ value }) => <InlineMath>{ value }</InlineMath>,
      code: ({ value }) => <Highlight>{ value }</Highlight>
    },
    className: 'output__content'
  };
  return (
    <ReactMarkdown {...newProps} />
  );
};
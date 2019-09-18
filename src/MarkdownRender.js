import React from 'react';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

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
    },
    className: "md-output"
  };
  return (
    <ReactMarkdown {...newProps} />
  );
};
import React from 'react';

export const Editor = ({ onChange }) => {
  return (
    // <textarea onChange={ onChange }></textarea>
    <textarea className="editor" onChange={ onChange }></textarea>
  )
}
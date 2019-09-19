import React from 'react';

export const Editor = ({ onChange }) => {
  return (
    <textarea autoFocus className="editor" onChange={ onChange }></textarea>
  )
}
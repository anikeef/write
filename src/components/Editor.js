import React from 'react';

export const Editor = ({ onChange, value }) => {
  return (
    <textarea autoFocus className="editor" onChange={ onChange } value={ value }
    placeholder="Enter your markdown"></textarea>
  )
}
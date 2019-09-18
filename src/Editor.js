import React from 'react';

export const Editor = ({ onChange }) => {
  return (
    // <textarea onChange={ onChange }></textarea>
    <div id="textarea" contentEditable onInput={ onChange }></div>
  )
}
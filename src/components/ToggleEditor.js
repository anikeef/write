import React from 'react';

export const ToggleEditor = ({ onClick }) => {
  return (
    <div className="output__toggle-editor" onClick={ onClick }>
      <span className="icon icon-arrow-left output__toggle-button"></span>
    </div>
  )
}
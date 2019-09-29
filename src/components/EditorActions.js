import React from 'react';

export const EditorActions = ({ uri, isCreatingLink, onSave }) => {
  let linkContent;
  if (uri) {
    linkContent = <a href={ uri } target="_blank" rel="noopener noreferrer">{ uri }</a>;
  } else if (isCreatingLink) {
    linkContent = 'Подождите...';
  } else {
    linkContent = 'Нажмите, чтобы создать ссылку';
  }

  return (
    <div className='editor-actions'>
      <div className='editor-actions__create-link' onClick={ onSave }>
        { linkContent }
      </div>
      <a className='editor-actions__help' href='/write/about' target="_blank" rel="noopener noreferrer">?</a>
    </div>
  );
}
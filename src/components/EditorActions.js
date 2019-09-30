import React from 'react';
import { config } from '../config';

export const EditorActions = ({ uri, isCreatingLink, onSave, shouldShowHelp }) => {
  let linkContent;
  if (uri) {
    linkContent = <a href={ uri } target="_blank" rel="noopener noreferrer">{ uri }</a>;
  } else if (isCreatingLink) {
    linkContent = 'Подождите...';
  } else {
    linkContent = 'Cоздать ссылку';
  }

  return (
    <div className='editor-actions'>
      <div className='editor-actions__create-link' onClick={ onSave }>
        { linkContent }
      </div>
      { shouldShowHelp &&
        <a href='about' className='editor-actions__help' >?</a>
      }
    </div>
  );
}
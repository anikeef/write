import React from 'react';
import { ToggleEditor } from './ToggleEditor';
import { MarkdownRender } from './MarkdownRender';
import { EditorActions } from './EditorActions';

export const Output = ({ 
  fullScreen, uri, onSave, isCreatingLink, shouldShowHelp, toggleFullScreen, markdown}) => {
  return (
    <div className={ "output" + (fullScreen ? " output_fullscreen" : "")}>
      <EditorActions uri={ uri } onSave={ onSave } 
      isCreatingLink={ isCreatingLink } shouldShowHelp={ shouldShowHelp } />
      <ToggleEditor onClick={ toggleFullScreen }/>
      <MarkdownRender source={ markdown }></MarkdownRender>
    </div>
  );
}
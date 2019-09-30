import React from 'react';

import { MarkdownRender } from "./MarkdownRender";
import { Editor } from "./Editor";
import { ToggleEditor } from "./ToggleEditor";
import { StorageService } from '../services/StorageService';
import { EditorActions } from './EditorActions';

export class LiveEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: props.preset || StorageService.getCachedMarkdown(),
      fullScreen: false,
      generatedURI: '',
      isCreatingLink: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.closeSavingInfo = this.closeSavingInfo.bind(this);
  }

  render() {
    return (
      <div className="live-editor">
        <Editor value={ this.state.markdown } onChange={ this.handleChange }/>
        <div className={ "output" + (this.state.fullScreen ? " output_fullscreen" : "")}>
          <EditorActions uri={ this.state.generatedURI } onSave={ this.handleSave } 
          isCreatingLink={ this.state.isCreatingLink } shouldShowHelp={ !this.props.preset } />
          <ToggleEditor onClick={ this.toggleEditor }/>
          <div className="output__content">
            <MarkdownRender source={ this.state.markdown }></MarkdownRender>
          </div>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value,
      shouldShowSavingInfo: false,
      generatedURI: ""
    });
    StorageService.cacheMarkdown(event.target.value);
  }

  toggleEditor() {
    this.setState({
      fullScreen: !this.state.fullScreen
    });
  }

  handleSave() {
    if (this.state.generatedURI && this.state.isCreatingLink) return;
    this.setState({ isCreatingLink: true });
    StorageService.createLink(this.state.markdown)
      .then(
        (uri) => {
          this.setState({
            generatedURI: uri,
            isCreatingLink: false
          })
        }
      );
  }

  closeSavingInfo() {
    if (this.state.shouldShowSavingInfo) {
      this.setState({ shouldShowSavingInfo: false })
    }
  }
}

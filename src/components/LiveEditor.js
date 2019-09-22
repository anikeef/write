import React from 'react';

import { MarkdownRender } from "./MarkdownRender";
import { Editor } from "./Editor";
import { ToggleEditor } from "./ToggleEditor";
import { SaveButton } from "./SaveButton";
import { StorageService } from '../services/StorageService';
import { Loading } from './Loading';

export class LiveEditor extends React.Component {
  constructor({ presetId }) {
    super();
    this.state = {
      markdown: StorageService.getCachedMarkdown(),
      fullScreen: false,
      generatedURI: presetId ? window.location.toString().slice(0, -5) : '',
      shouldShowSavingInfo: false,
      isLoading: !!presetId
    }

    if (presetId) {
      StorageService.getMarkdown(presetId)
      .then((markdown) => {
        this.setState({ 
          markdown: markdown,
          isLoading: false
        })
      });
    }

    this.handleChange = this.handleChange.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.closeSavingInfo = this.closeSavingInfo.bind(this);
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    }

    return (
      <div className="live-editor">
        <Editor value={ this.state.markdown }onChange={ this.handleChange }/>
        <div className={ "output" + (this.state.fullScreen ? " output_fullscreen" : "")}>
          <SaveButton url={ this.state.generatedURI } onClick={ this.handleSave } 
          shouldShowSavingInfo={ this.state.shouldShowSavingInfo } closeSavingInfo={ this.closeSavingInfo }/>
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
    this.setState({ shouldShowSavingInfo: !this.state.shouldShowSavingInfo });
    if (this.state.generatedURI) return;
    StorageService.createLink(this.state.markdown)
      .then(
        (uri) => {
          this.setState({
            generatedURI: uri
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

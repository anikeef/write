import React from 'react';

import { MarkdownRender } from "./MarkdownRender";
import { Editor } from "./Editor";
import { ToggleEditor } from "./ToggleEditor";
import { SaveButton } from "./SaveButton";
import { StorageService } from '../services/StorageService';

export class LiveEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: "",
      fullScreen: false,
      generatedURI: "",
      shouldShowSavingInfo: false
    }
    StorageService.getMarkdownFromCurrentURI()
      .then((markdown) => {
        this.setState({ 
          markdown: markdown,
          generatedURI: window.location.toString()
        })
      })

    this.onChange = this.onChange.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  render() {
    return (
      <div className="live-editor">
        <Editor value={ this.state.markdown }onChange={ this.onChange }/>
        <div className={ "output" + (this.state.fullScreen ? " output_fullscreen" : "")}>
          <SaveButton url={ this.state.generatedURI } onClick={ this.handleSave } 
          shouldShowSavingInfo={ this.state.shouldShowSavingInfo } />
          <ToggleEditor onClick={ this.toggleEditor }/>
          <div className="output__content">
            <MarkdownRender source={ this.state.markdown }></MarkdownRender>
          </div>
        </div>
      </div>
    );
  }

  onChange(event) {
    this.setState({
      markdown: event.target.value,
      shouldShowSavingInfo: false,
      generatedURI: ""
    });
    window.localStorage.setItem("markdown", event.target.value);
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
}

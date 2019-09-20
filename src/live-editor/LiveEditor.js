import React from 'react';

import { MarkdownRender } from "./MarkdownRender";
import { Editor } from "./Editor";
import { ToggleEditor } from "./ToggleEditor";

// let SOURCE = "Hello, world \n$$\n\\int_0^1x^2dx\n$$"

export class LiveEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: "",
      fullScreen: false
    }
    this.onChange = this.onChange.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
  }

  render() {
    return (
      <div className="live-editor">
        <Editor onChange={ this.onChange }/>
        <div className={ "output" + (this.state.fullScreen ? " output_fullscreen" : "")}>
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
      markdown: event.target.value
    });
  }

  toggleEditor() {
    this.setState({
      fullScreen: !this.state.fullScreen
    });
  }
}

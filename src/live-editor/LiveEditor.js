import React from 'react';

import { MarkdownRender } from "./MarkdownRender";
import { Editor } from "./Editor";

// let SOURCE = "Hello, world \n$$\n\\int_0^1x^2dx\n$$"

export class LiveEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: ""
    }
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <div class="live-editor">
        <Editor onChange={ this.onChange }/>
        <MarkdownRender source={ this.state.markdown }></MarkdownRender>
      </div>
    );
  }

  onChange(event) {
    this.setState({
      markdown: event.target.value
    })
  }
}

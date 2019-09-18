import React from 'react';

import './App.css';
import { MarkdownRender } from "./MarkdownRender";
import { Editor } from "./Editor";

let SOURCE = "Hello, world \n$$\n\\int_0^1x^2dx\n$$"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: ""
    }
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <>
        <Editor onChange={ this.onChange }/>
        <MarkdownRender source={ this.state.markdown }></MarkdownRender>
      </>
    );
  }

  onChange(event) {
    console.log('a');
    this.setState({
      markdown: event.target.textContent
    })
  }
}

export default App;

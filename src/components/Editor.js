import React from 'react';
import Highlight from 'react-highlight';

export class Editor extends React.Component {
  render() {
    return (
      <div className="editor">
        <textarea autoFocus className="editor__textarea" onChange={ this.props.onChange } 
        value={ this.props.value } ref={ (el) => this.textarea = el } />
        <div className="editor__pseudo-textarea" ref={ (el) => { this.pseudoArea = el } }>
          <Highlight className="markdown">{ this.props.value || "Enter your markdown" }</Highlight>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.textarea.addEventListener('scroll', (e) => {
      console.log(this.pseudoArea.scrollTop);
      this.pseudoArea.scrollTop = this.textarea.scrollTop;
    })
  }
}
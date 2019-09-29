import React from 'react';

import { MarkdownRender } from "./MarkdownRender";
import { StorageService } from '../services/StorageService';
import { Loading } from './Loading';

export class MarkdownViewer extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      markdown: "",
      isLoading: true
    }
    StorageService.getMarkdown(match.params.id)
      .then((markdown) => {
        this.setState({ 
          markdown: markdown,
          isLoading: false
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ 
          markdown: error.message,
          isLoading: false
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    }

    return (
      <div className="output output_fullscreen">
        <div className="output__content">
          <MarkdownRender source={ this.state.markdown } />
        </div>
      </div>
    );
  }
}

import React from 'react';
import { SaveInfo } from './SaveInfo';

export class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.handleClose = this.handleClose.bind(this);
  }

  render() {
    const { onClick, url, shouldShowSavingInfo } = this.props;
    return (
      <div className="save-container" ref={ (node) => this.container = node }>
        <SaveInfo url={ url } shouldShow={ shouldShowSavingInfo } close={ this.handleClose } />
        <button className="save-button" onClick={ onClick }>
          <span className="icon icon-fullscreen"></span>
        </button>
      </div>
    );
  }

  handleClose(event) {
    if (!this.container.contains(event.target)) {
      this.props.closeSavingInfo();
    }
  }
}
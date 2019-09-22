import React from 'react';

export class SaveInfo extends React.Component {
  render() {
    return (this.props.shouldShow) ? 
      <input className="save-info" placeholder="Wait..." disabled value={ this.props.url } /> : null;
  }

  componentDidMount() {
    document.addEventListener('click', this.props.close);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.close);
  }
}
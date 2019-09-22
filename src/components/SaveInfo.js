import React from 'react';

export class SaveInfo extends React.Component {
  render() {
    const { url, shouldShow } = this.props;
    if (!shouldShow) return null;
    return (
      <div className="save-info">
        { (url) ? <a className="saved-link" href={ url } target="_blank">{ url }</a> : "Wait..." }
      </div>
    );
      
  }

  componentDidMount() {
    document.addEventListener('click', this.props.close);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.close);
  }
}
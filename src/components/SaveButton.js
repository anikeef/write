import React from 'react';

export const SaveButton = ({ onClick, url, shouldShowSavingInfo }) => {
  const savingInfo = shouldShowSavingInfo ? 
    <input className="save-info" placeholder="Wait..." disabled value={ url }></input> : null

  document.addEventListener("document:click", () => {
    alert("af");
  })

  return (
    <div className="save-container">
      { savingInfo }
      <button className="save-button" onClick={ onClick }>
        <span className="icon icon-fullscreen"></span>
      </button>
      
    </div>
  );
}
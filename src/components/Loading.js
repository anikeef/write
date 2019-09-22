import React from 'react';
import { HashLoader } from 'react-spinners';

export const Loading = () => {
  return (
    <div className="loading">
      <HashLoader></HashLoader>
    </div>
    
  );
}
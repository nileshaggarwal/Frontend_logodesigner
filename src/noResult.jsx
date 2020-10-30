import React from 'react';

const NoResult = ({ searchQuery }) => {
  return <div style={{
    textAlign: 'center',
    color: '#c5c6c7',
    fontSize: '1.8em',
    marginTop: '80px',
    marginBottom: '80px'
  }}>
    {`No results for "${searchQuery}" :(`}
  </div>
}

export default NoResult;
import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={'auto'} width={'20%'} />
);

export default Loading;
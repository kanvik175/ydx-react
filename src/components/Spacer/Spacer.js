import React from 'react';

export default function Spacer({ width, height }) {

  const style = {};

  width && (style.width = `${width}px`);
  height && (style.height = `${height}px`);

  return <div style={style} />;
}
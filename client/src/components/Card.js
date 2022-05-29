import React from 'react';

export default function Card(props) {
  const dragStart = (e) => {
    e.target.classList.add('dragging');
  };

  const dragEnd = (e) => {
    e.target.classList.remove('dragging');
  };

  return (
    <div {...props} onDragStart={dragStart} onDragEnd={dragEnd}>
      {props.children}
    </div>
  );
}

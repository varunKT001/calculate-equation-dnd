import React, { useRef, useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

export default function Canvas(props) {
  const canvasRef = useRef();
  const { setEquation } = useGlobalContext();
  const [dropedItem, setDropedItem] = useState('');

  const dragOver = (e) => {
    e.preventDefault();
    const draggable = document.querySelector('.dragging');
    const position = e.clientX + canvasRef.current.scrollLeft;
    setDropedItem({
      node: draggable,
      position,
    });
  };

  const drop = (e) => {
    e.preventDefault();
    const { node, position } = dropedItem;
    const value = node.getAttribute('data-value');
    const type = node.className;
    const key = node.innerText;
    setEquation((prev) => {
      const newEquation = [...prev, { type, key, value, position }]
        .sort((a, b) => a.position - b.position)
        .map((item, index) => {
          item.position = index * 140 + 10;
          return item;
        });
      return newEquation;
    });
  };

  return (
    <div {...props} ref={canvasRef} onDrop={drop} onDragOver={dragOver}>
      {props.children}
    </div>
  );
}

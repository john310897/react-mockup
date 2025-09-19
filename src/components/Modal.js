import React from 'react';
import ReactDOM from 'react-dom';
const Modal = ({ isOpen, children }) => {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.body
  );
};

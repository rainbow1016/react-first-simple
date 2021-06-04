import React from 'react';

const ModalContentAction = ({ setActive, successAction, actionButtonText = 'Update' }) => {
  const handleCancel = (e) => {
    e.preventDefault();
    setActive(false);
  };

  const handleSuccess = () => {
    if (typeof successAction === 'function') {
      successAction();
    }
  };

  return (
    <div className="modal-actions">
      <button
        className="btn btn-1 btn-md"
        style={{ marginRight: '8px' }}
        onClick={() => handleSuccess()}
      >
        {actionButtonText}
      </button>
      <button className="btn btn-1 btn-md" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default ModalContentAction;

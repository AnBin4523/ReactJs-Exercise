import React from "react";

export default function Modal({ product, isOpen, onClose }) {
  return (
    <div>
      {isOpen && (
        <div className="container">
          <div className="modal d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Description</h5>
                  <button
                    className="btn btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={onClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        height={250}
                      />
                    </div>
                    <div className="col-6">
                      <h3 className="card-title">{product.name}</h3>
                      <br />
                      <h4 className="card-text">{product.price}$</h4>
                      <br />
                      <p className="card-text">{product.description}</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

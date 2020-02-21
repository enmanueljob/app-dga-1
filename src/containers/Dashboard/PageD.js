import React from "react";
import { Link } from "react-router-dom";
// @components
import { Modal } from "../../components";

export default () => {
  return (
    <div>
      <Link to="/layout">Ir a layout</Link>
      <button>Mostrar modal</button>
      <Modal>
        <p>contenido del modal</p>
      </Modal>
    </div>
  );
};

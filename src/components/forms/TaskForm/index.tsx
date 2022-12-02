import { FC } from "react";
import { Button, Form } from "react-bootstrap";

const TaskForm: FC = () => {
  return (
    <div className="formBox">
      <div className="addTaskForm">
        <Form>
          <h2>Agregar tarea</h2>

          <Form.Group className="mb-3" controlId="titulo">
            <Form.Label>Titulo</Form.Label>
            <Form.Control type="text" placeholder="Titulo" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="fecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" placeholder="Fecha" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="categoria">
            <Form.Label>Categoria</Form.Label>
            <Form.Control type="text" placeholder="Categoria" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="descripción">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Descripción" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="estatus">
            <Form.Label>Estatus</Form.Label>
            <Form.Control type="text" placeholder="Estatus" />
          </Form.Group>

          <Button className="add-btn" variant="primary" type="button">
            Agregar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export { TaskForm };

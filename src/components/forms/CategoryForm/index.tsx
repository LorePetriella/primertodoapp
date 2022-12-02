import { FC } from "react";
import Form from "react-bootstrap/Form";

const CategoryForm: FC = () => {
  return (
    <div className="formBox">
      <div className="addCategoryForm">
        <Form>
          <h2>Agregar categoria</h2>

          <Form.Group className="mb-3" controlId="nombre de categoria">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export { CategoryForm };

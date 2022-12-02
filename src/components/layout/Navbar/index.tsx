import { FC } from "react";
import { Nav } from "react-bootstrap";

type Props = {
  onChangePage: (value: string) => void;
};

const Navbar: FC<Props> = ({ onChangePage }) => {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/Login">
      <Nav.Item>
        <Nav.Link onClick={() => onChangePage("Login")}>Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => onChangePage("Dashboard")}>Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => onChangePage("AddCategory")}>
          AddCategory
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => onChangePage("AddTask")}>AddTask</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => onChangePage("Categories")}>
          Categories
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => onChangePage("Profile")}>Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => onChangePage("SignUp")}>SignUp</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => onChangePage("Tasks")}>Tasks</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export { Navbar };

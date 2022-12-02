import { Layout } from "../../components/layout";
import { FC } from "react";
import { LoginForm } from "../../components/forms/LoginForm";

type Props = {
  onChangePage: (value: string) => void;
};

const Login: FC<Props> = ({ onChangePage }) => {
  return (
    <div className="">
      <Layout onChangePage={onChangePage}>
        <LoginForm />
      </Layout>
    </div>
  );
};

export { Login };

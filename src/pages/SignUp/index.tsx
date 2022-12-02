import { FC } from "react";
import { UserForm } from "../../components/forms";
import { Layout } from "../../components/layout";

type Props = {
  onChangePage: (value: string) => void;
};

const SignUp: FC<Props> = ({ onChangePage }) => {
  return (
    <div className="">
      <Layout onChangePage={onChangePage}>
        <UserForm />
      </Layout>
    </div>
  );
};

export { SignUp };

import { FC } from "react";
import { Layout } from "../../components/layout";

type Props = {
  onChangePage: (value: string) => void;
};

const Tasks: FC<Props> = ({ onChangePage }) => {
  return (
    <div className="">
      <Layout onChangePage={onChangePage}>
        <h1>Tasks</h1>
      </Layout>
    </div>
  );
};

export { Tasks };

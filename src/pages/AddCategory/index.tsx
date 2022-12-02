import { FC } from "react";
import { CategoryForm } from "../../components/forms";
import { Layout } from "../../components/layout/";

type Props = {
  onChangePage: (value: string) => void;
};

const AddCategory: FC<Props> = ({ onChangePage }) => {
  return (
    <div className="">
      <Layout onChangePage={onChangePage}>
        <CategoryForm />
      </Layout>
    </div>
  );
};

export { AddCategory };

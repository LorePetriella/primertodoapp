import { FC } from "react";
import { TaskForm } from "../../components/forms/TaskForm";
import { Layout } from "../../components/layout";

type Props = {
  onChangePage: (value: string) => void;
};

const AddTask: FC<Props> = ({ onChangePage }) => {
  return (
    <div className="">
      <Layout onChangePage={onChangePage}>
        <TaskForm />
      </Layout>
    </div>
  );
};

export { AddTask };

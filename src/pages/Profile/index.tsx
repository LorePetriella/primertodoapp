import { FC } from "react";
import { Layout } from "../../components/layout";

type Props = {
  onChangePage: (value: string) => void;
};

const Profile: FC<Props> = ({ onChangePage }) => {
  return (
    <div className="">
      <Layout onChangePage={onChangePage}>
        {" "}
        <h1>Profile</h1>
      </Layout>
    </div>
  );
};

export { Profile };

import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";
import { FC, ReactNode } from "react";
import { Navbar } from "../Navbar";
import { title } from "process";

type Props = {
  onChangePage: (value: string) => void;
  children: ReactNode;
  title: string;
  className: string;
};

const Layout: FC<Props> = ({ children, title, className, onChangePage }) => {
  return (
    <div className="">
      <Header />
      <Navbar onChangePage={onChangePage} />
      <Main title={title} className={className}>
        {children}
      </Main>
      <Footer />
    </div>
  );
};

export { Layout };

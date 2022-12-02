import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  AddCategory,
  AddTask,
  Categories,
  Dashboard,
  Login,
  Profile,
  SignUp,
  Tasks,
} from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [page, setPage] = useState("Login");

  const renderPage = (value: string) => {
    setPage(value);
  };

  return (
    <>
      {page === "Login" && <Login onChangePage={renderPage} />}
      {page === "Dashboard" && <Dashboard onChangePage={renderPage} />}
      {page === "AddCategory" && <AddCategory onChangePage={renderPage} />}
      {page === "AddTask" && <AddTask onChangePage={renderPage} />}
      {page === "Categories" && <Categories onChangePage={renderPage} />}
      {page === "Profile" && <Profile onChangePage={renderPage} />}
      {page === "SignUp" && <SignUp onChangePage={renderPage} />}
      {page === "Tasks" && <Tasks onChangePage={renderPage} />}
    </>
  );

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/AddCategory" element={<AddCategory />}></Route>
  //       <Route path="/AddTask" element={<AddTask />}></Route>
  //       <Route path="/Categories" element={<Categories />}></Route>
  //       <Route path="/Dasboard" element={<Dashboard />}></Route>
  //       <Route path="/Login" element={<Login />}></Route>
  //       <Route path="/Profile" element={<Profile />}></Route>
  //       <Route path="/SignUp" element={<SignUp />}></Route>
  //       <Route path="/Tasks" element={<Tasks />}></Route>
  //       <Route path="/" element={<Navigate replace to="/Dashboard" />}></Route>
  //       <Route path="/Dashboard" element={<Dashboard />}></Route>
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;

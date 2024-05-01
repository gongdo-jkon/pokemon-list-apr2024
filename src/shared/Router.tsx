import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "../components/layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
};

export default Router;

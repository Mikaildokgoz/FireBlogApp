import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Details from "../pages/Details";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import UpdateBlog from "../pages/UpdateBlog";
import NotFound from "../pages/NotFound";
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRouter />}>
          <Route path="/details" element={<Details />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="updateblog" element={<UpdateBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

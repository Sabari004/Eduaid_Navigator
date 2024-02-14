import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SUmm from "./pages/Summ";
import AdminHome from "./pages/AdminHome";
import ViewCourse from "./pages/ViewCourse";
import AddEnquiry from "./pages/AddEnquiry";
import ViewEnquiry from "./pages/ViewEnquiry";
import AdminViewCourse from "./pages/AdminVIewCourse";
import AdminEnquiry from "./pages/AdminEnquiry";
import Settings from "./pages/Settings";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/summ" element={<SUmm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/home" element={<Home />} />
        <Route path="/user/courses" element={<ViewCourse />} />
        <Route path="/user/viewcourses/:id" element={<Courses />} />
        <Route path="/user/addenquiry" element={<AddEnquiry />} />
        <Route path="/user/viewenquiry" element={<ViewEnquiry />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/courses" element={<AdminViewCourse />} />
        <Route path="/admin/enquiry" element={<AdminEnquiry />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/coursedetails/:id" element={<CourseDetails />} />
      </Routes>
    </>
  );
}

export default App;

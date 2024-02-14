import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = ({ det }) => {
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = (id) => {
    navigate("/user/viewcourses/" + id);
  };
  // console.log(det);

  return (
    <div className="mt-[70px] ml-5 ">
      <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img className="h-56" src={det.img_url} alt="card-image" />
        </div>
        <div class="p-6">
          <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {det.course_name}
          </h5>
          <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {det.description}
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            onClick={(e) => fetchData(det.course_id)}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};
const ViewCourse = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8989/getAllCourses").then((r) => {
      setCourse(r.data);
    });
  }, []);
  return (
    <>
      <div className="relative sm:-8 p-4 bg-[#2D033B]  min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar />
        </div>
        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {course.length > 0 && course?.map((u) => <Card det={u} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCourse;

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AddEnquiry = () => {
  const [inputarr, setInputarr] = useState([]);
  const [inputdata, setInputdata] = useState({
    name: "",
    course: "",
    message: "",
  });

  // const { name, course, message } = inputdata;

  const handleChange = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  let { name, course, message } = inputdata;
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputarr([...inputarr, { name, course, message }]);
    console.log(inputarr);
    console.log(inputdata);
    // Reset form fields if needed
    setInputdata({ name: "", course: "", message: "" });
  };
  return (
    <>
      <div className="relative sm:-8 p-4 bg-[#2D033B]  min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar />
        </div>
        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />
          <div className="  w-[80vw]">
            <div className="flex justify-center">
              <section class="bg-white rounded-lg">
                <div class="py-8 lg:py-16 px-4 mx-auto">
                  <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
                    Enquiry
                  </h2>
                  <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta
                    feature? Need details about our Business plan? Let us know.
                  </p>
                  <form action="#" class="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="name@flowbite.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="subject"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Course
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="course"
                        value={course}
                        onChange={handleChange}
                        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Let us know how we can help you"
                        required
                      />
                    </div>
                    <div class="sm:col-span-2">
                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        rows="6"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Leave a comment..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEnquiry;

import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AdminSideBar from "../components/AdminSideBar";

const AdminEnquiry = () => {
  return (
    <>
      <div className="relative sm:-8 p-4 bg-[#2D033B]  min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10 relative">
          <AdminSideBar />
        </div>
        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />
          <div className="mt-[70px] ml-5 w-[80vw]">
            <div
              id="v0-container"
              className="!visible transition-opacity duration-150 !opacity-100"
              style={{ visibility: "hidden", opacity: 0 }}
            >
              <div className="w-full max-w-2xl mx-auto" data-id="1">
                <h1 className="text-white text-2xl font-bold mb-6" data-id="2">
                  User Enquiries
                </h1>
                <div className="space-y-8" data-id="3">
                  {/* User Enquiry 1 */}
                  <div
                    className="border p-5 bg-white border-gray-200 rounded-lg dark:border-gray-800"
                    data-id="4"
                  >
                    <div className="flex flex-col p-4" data-id="5">
                      <div
                        className="flex items-center justify-between"
                        data-id="6"
                      >
                        <div className="flex items-center gap-2" data-id="7">
                          <span
                            className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8"
                            data-id="8"
                          >
                            <img
                              className="aspect-square h-full w-full"
                              alt="@shadcn"
                              data-id="9"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHt2GDofV5sNOaTrLarqU3XmMpTNXxaw9dg&usqp=CAU"
                            />
                          </span>
                          <div className="grid gap-1" data-id="11">
                            <div className="font-semibold" data-id="12">
                              John Doe
                            </div>
                            <div
                              className="text-xs text-gray-500 dark:text-gray-400"
                              data-id="13"
                            >
                              john.doe@example.com
                            </div>
                          </div>
                        </div>
                        <div
                          className="text-xs text-gray-500 dark:text-gray-400"
                          data-id="14"
                        >
                          Jan 30, 2024 9:15 AM
                        </div>
                      </div>
                      <p
                        className="mt-4 text-sm text-gray-500 dark:text-gray-400"
                        data-id="15"
                      >
                        Hi, I have a question about your product. Can you tell
                        me more about its features?
                      </p>
                    </div>
                    <form
                      className="border-t border-gray-200 dark:border-gray-800"
                      data-id="16"
                    >
                      <textarea
                        className="border-black flex min-h-[80px] rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full p-4"
                        placeholder="Write your reply..."
                        data-id="17"
                      ></textarea>
                      <div
                        className="flex justify-end p-4 border-t border-gray-200 dark:border-gray-800"
                        data-id="18"
                      >
                        <button
                          className=" bg-black text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                          type="submit"
                          data-id="19"
                        >
                          Send Reply
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* User Enquiry 2 */}
                  <div
                    className="border p-5 bg-white border-gray-200 rounded-lg dark:border-gray-800"
                    data-id="20"
                  >
                    <div className="flex flex-col p-4" data-id="21">
                      <div
                        className="flex items-center justify-between"
                        data-id="22"
                      >
                        <div className="flex items-center gap-2" data-id="23">
                          <span
                            className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8"
                            data-id="24"
                          >
                            <img
                              className="aspect-square h-full w-full"
                              alt="@shadcn"
                              data-id="25"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHt2GDofV5sNOaTrLarqU3XmMpTNXxaw9dg&usqp=CAU"
                            />
                          </span>
                          <div className="grid gap-1" data-id="27">
                            <div className="font-semibold" data-id="28">
                              Emily Moore
                            </div>
                            <div
                              className="text-xs text-gray-500 dark:text-gray-400"
                              data-id="29"
                            >
                              emily.moore@example.com
                            </div>
                          </div>
                        </div>
                        <div
                          className="text-xs text-gray-500 dark:text-gray-400"
                          data-id="30"
                        >
                          Jan 29, 2024 3:20 PM
                        </div>
                      </div>
                      <p
                        className="mt-4 text-sm text-gray-500 dark:text-gray-400"
                        data-id="31"
                      >
                        Hello, I would like to know more about the pricing for
                        your services.
                      </p>
                    </div>
                    <form
                      className="border-t border-gray-200 dark:border-gray-800"
                      data-id="32"
                    >
                      <textarea
                        className="flex min-h-[80px] rounded-md border  border-black bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full p-4"
                        placeholder="Write your reply..."
                        data-id="33"
                      ></textarea>
                      <div
                        className="flex justify-end p-4 border-t border-gray-200 dark:border-gray-800"
                        data-id="34"
                      >
                        <button
                          className="bg-black text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                          type="submit"
                          data-id="35"
                        >
                          Send Reply
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminEnquiry;

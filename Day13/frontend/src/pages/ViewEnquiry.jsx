import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  SimpleGrid,
  Avatar,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ViewEnquiry = () => {
  const link = [
    {
      name: "Sabari Raj",
      message: "Is this good than other programming language",
    },
    {
      name: "Sabari Raj",
      message: "Is that any courses laike springboot",
    },
    {
      name: "Sabari Raj",
      message: "Basic courses for java is available or  not",
    },
  ];

  return (
    <>
      <div className="relative sm:-8 p-4 bg-[#2D033B]  min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar />
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
                  View Enquiries
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
                  </div>
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
                  </div>
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

export default ViewEnquiry;

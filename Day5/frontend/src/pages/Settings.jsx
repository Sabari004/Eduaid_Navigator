import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AdminSideBar from "../components/AdminSideBar";

const Settings = () => {
  const [bannerText, setBannerText] = useState("");
  const [bannerImageUrl, setBannerImageUrl] = useState("");

  // State variables for featured content form
  const [featuredContentTitle, setFeaturedContentTitle] = useState("");
  const [featuredContentDescription, setFeaturedContentDescription] =
    useState("");
  const [featuredContentImageUrl, setFeaturedContentImageUrl] = useState("");
  // Handler for saving banner form
  const handleBannerSave = () => {
    // Implement your save logic here
  };

  // Handler for saving featured content form
  const handleFeaturedContentSave = () => {
    // Implement your save logic here
  };
  return (
    <>
      <div className="relative sm:-8 p-4 bg-[#2D033B]  min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10 relative">
          <AdminSideBar />
        </div>
        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />
          <div className="mt-[70px] ml-5 w-[80vw]">
            <div className="w-[60vw]">
              {/* Navigation */}
              {/* <nav className="text-sm text-gray-500 grid gap-4 dark:text-gray-400">
                <a
                  className="font-semibold text-gray-900 dark:text-gray-50"
                  href="#"
                >
                  Home Page
                </a>
                <a href="#">Landing Page</a>
              </nav> */}

              {/* Banner Form */}
              <div className="grid gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                      Home Page Banner
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Update the banner image and text for the home page.
                    </p>
                  </div>
                  <div className="p-6">
                    <form className="flex flex-col gap-4">
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Banner Text"
                        value={bannerText}
                        onChange={(e) => setBannerText(e.target.value)}
                      />
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Banner Image URL"
                        value={bannerImageUrl}
                        onChange={(e) => setBannerImageUrl(e.target.value)}
                      />
                    </form>
                  </div>
                  <div className="flex items-center border-t p-6">
                    <button
                      className=" bg-black  text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                      onClick={handleBannerSave}
                    >
                      Save
                    </button>
                  </div>
                </div>

                {/* Featured Content Form */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                      Landing Page Featured Content
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Update the featured content for the landing page.
                    </p>
                  </div>
                  <div className="p-6">
                    <form className="flex flex-col gap-4">
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Featured Content Title"
                        value={featuredContentTitle}
                        onChange={(e) =>
                          setFeaturedContentTitle(e.target.value)
                        }
                      />
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Featured Content Description"
                        value={featuredContentDescription}
                        onChange={(e) =>
                          setFeaturedContentDescription(e.target.value)
                        }
                      />
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Featured Content Image URL"
                        value={featuredContentImageUrl}
                        onChange={(e) =>
                          setFeaturedContentImageUrl(e.target.value)
                        }
                      />
                    </form>
                  </div>
                  <div className="flex items-center border-t p-6 ">
                    <button
                      className="bg-black  text-white  inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                      onClick={handleFeaturedContentSave}
                    >
                      Save
                    </button>
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

export default Settings;

import React from "react";
import { HiDownload, HiMenu } from "react-icons/hi";
import ProgressBar from "../components/ProgressBar";
import Sidebar from "../components/Sidebar";
import { userData, projects, latestDelivery } from "../data/dummyData";
import { useSidebar } from "../contexts/SidebarContext";

const Dashboard = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Mobile header */}
        <header className="lg:hidden sticky top-0 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <HiMenu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              DesignHub
            </h1>
          </div>
        </header>

        <div className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 flex justify-between items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Good morning, {userData.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Here's your project overview
                </p>
              </div>
              <div className="hidden lg:block">
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 transition-transform hover:scale-[1.02]"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 dark:text-gray-400">
                      Progress
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {project.progress}%
                    </span>
                  </div>
                  <ProgressBar progress={project.progress} />
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Latest Delivery
                </h2>
                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {latestDelivery.date}
                </span>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {latestDelivery.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  All final assets for your branding project including source
                  files and documentation
                </p>
                <button className="flex items-center bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white font-medium py-2 px-4 rounded-lg transition group">
                  <HiDownload className="mr-2 transition-transform group-hover:translate-y-0.5" />
                  Download Package
                </button>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 dark:border-orange-400 p-4">
                <p className="text-orange-700 dark:text-orange-300">
                  <span className="font-semibold">Note:</span> Waiting for your
                  feedback on the logo concepts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

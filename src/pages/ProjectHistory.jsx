import React from "react";
import DeliveryTable from "../components/DeliveryTable";
import Sidebar from "../components/SideBar";
import { deliveries } from "../data/dummyData";
import { HiMenu } from "react-icons/hi";
import { useSidebar } from "../contexts/SidebarContext";

const ProjectHistory = () => {
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
              Project History
            </h1>
          </div>
        </header>

        <div className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 flex justify-between items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Project History
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  All your past deliveries and assets
                </p>
              </div>
              <div className="hidden lg:block">
              </div>
            </div>

            <DeliveryTable deliveries={deliveries} />

            <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Client Notes
              </h2>
              <textarea
                className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Add your feedback or notes here..."
              ></textarea>
              <div className="mt-4 flex justify-end">
                <button className="bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white font-medium py-2 px-6 rounded-lg transition">
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHistory;

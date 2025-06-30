import React from "react";
import { HiHome, HiClock, HiLogout, HiX } from "react-icons/hi";
import { useSidebar } from "../contexts/SidebarContext";

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static`}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary dark:text-primary-light">
              DesignHub
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Client Portal
            </p>
          </div>
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={toggleSidebar}
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        <nav className="p-4 h-[calc(100vh-7rem)] flex flex-col">
          <ul className="space-y-2 flex-1">
            <li>
              <a
                href="/dashboard"
                className="flex items-center p-3 rounded-lg bg-primary text-white dark:bg-primary-dark group"
              >
                <HiHome className="mr-3 text-xl" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/history"
                className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 group"
              >
                <HiClock className="mr-3 text-xl" />
                <span>Project History</span>
              </a>
            </li>
          </ul>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <a
              href="/"
              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 group"
            >
              <HiLogout className="mr-3 text-xl" />
              <span>Logout</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

import React from "react";
import { HiDownload } from "react-icons/hi";

const DeliveryTable = ({ deliveries }) => (
  <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {deliveries.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {item.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                ${
                  item.status.includes("requested")
                    ? "bg-orange-100 text-orange-800"
                    : item.status === "Approved"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {item.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              <button className="flex items-center text-primary hover:text-primary-dark">
                <HiDownload className="mr-1" /> Download
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DeliveryTable;

'use client';

import { Customer, fetchCustomers } from '@/app/services/api';
import React, { useEffect, useState } from 'react';

const CustomerTable: React.FC = () => {
  const [data, setData] = useState<Customer[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const allData = await fetchCustomers(page, limit);
    if (search) {
      const filtered = allData.filter((item) =>
        item.Name.toLowerCase().includes(search.toLowerCase())
      );
      setData(filtered);
    } else {
      setData(allData);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [page, search]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Customer Table</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-[800px] w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border px-2 py-1 text-sm">Number</th>
                    <th className="border px-2 py-1 text-sm">Name of Location</th>
                    <th className="border px-2 py-1 text-sm">Date</th>
                    <th className="border px-2 py-1 text-sm">Login Hour</th>
                    <th className="border px-2 py-1 text-sm">Name</th>
                    <th className="border px-2 py-1 text-sm">Age</th>
                    <th className="border px-2 py-1 text-sm">Gender</th>
                    <th className="border px-2 py-1 text-sm">Email</th>
                    <th className="border px-2 py-1 text-sm">No Telp</th>
                    <th className="border px-2 py-1 text-sm">Brand Device</th>
                    <th className="border px-2 py-1 text-sm">Digital Interest</th>
                    <th className="border px-2 py-1 text-sm">Location Type</th>
                </tr>
                </thead>
                <tbody>
                {data.map((cust, index) => (
                    <tr key={index} className="text-center text-sm">
                    <td className="border px-2 py-1">{cust.Number}</td>
                    <td className="border px-2 py-1">{cust['Name of Location']}</td>
                    <td className="border px-2 py-1">{cust.Date}</td>
                    <td className="border px-2 py-1">{cust['Login Hour']}</td>
                    <td className="border px-2 py-1">{cust.Name}</td>
                    <td className="border px-2 py-1">{cust.Age}</td>
                    <td className="border px-2 py-1">{cust.gender === 1 ? 'Male' : 'Female'}</td>
                    <td className="border px-2 py-1">{cust.Email}</td>
                    <td className="border px-2 py-1">{cust['No Telp']}</td>
                    <td className="border px-2 py-1">{cust['Brand Device']}</td>
                    <td className="border px-2 py-1">{cust['Digital Interest']}</td>
                    <td className="border px-2 py-1">{cust['Location Type']}</td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
              disabled={page === 1}
            >
              Previous
            </button>
            <span className="text-gray-700 font-medium">Page {page}</span>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerTable;

import React, { useEffect, useState } from "react";
import api from "../utils/api";
import MainLayout from "../components/MainLayout";
import { motion } from "framer-motion";

const CustomerOrderRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const res = await api.get("/order-requests/my");
      setRequests(res.data?.data || []);
    } catch (err) {
      console.error("Failed to fetch order requests", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <MainLayout>
      <section className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white py-28 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-[#fff]">
            My Order <span className="text-[#F7B614]">Requests</span>
          </h2>
          <div className="w-35 h-1 mb-10 mx-auto bg-[#F7B614] rounded-full" />


          {loading ? (
            <p className="text-center text-gray-300">Loading...</p>
          ) : requests.length === 0 ? (
            <p className="text-center text-gray-400 text-lg">
              No order requests found.
            </p>
          ) : (
            <div className="space-y-6">
              {requests?.map((req, index) => (
                <motion.div
                  key={req._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-800 border border-[#F7B614] rounded-xl shadow p-6 text-white"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold leading-8 text-white">
                        Request ID:{" "}
                        <span className="text-[#F7B614]">{req._id}</span>
                      </h3>
                      <p className="text-sm text-white">
                        <p className="text-sm leading-8 text-white">
                          Requested At:{" "}
                          {new Date(
                            req.requestedAt || req.createdAt
                          ).toLocaleDateString()}
                        </p>
                      </p>
                      <p className="text-sm text-white mt-1">
                        Status:{" "}
                        <span
                          className={`px-2 py-1 rounded-full text-white text-xs font-medium ${
                            req.status === "Pending"
                              ? "bg-yellow-500"
                              : req.status === "Approved"
                              ? "bg-green-600"
                              : "bg-red-600"
                          }`}
                        >
                          {req.status}
                        </span>
                      </p>
                    </div>

                    {req.customerNote && (
                      <div className="mt-4 md:mt-0 text-sm italic text-gray-700 max-w-md">
                        "{req.customerNote}"
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {req.items.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-lg p-3 flex gap-3 items-center"
                      >
                        <img
                          src={item.product?.image || "https://placehold.co/50"}
                          alt={item.product?.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-sm">
                            {item.product?.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {req.decisionNote && req.status !== "Pending" && (
                    <p className="text-xs text-gray-500 mt-4">
                      <strong>Admin Note:</strong> {req.decisionNote}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default CustomerOrderRequests;

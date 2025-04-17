import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import api from "../utils/api";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await api.get("/auth/user/me");
      if (res.data?.statusCode === 200) {
        setUser(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <MainLayout>
      <section className="py-32 bg-gradient-to-tl from-neutral-900 via-neutral-800 to-black text-white min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl font-bold mb-10 text-center text-[#F7B614]">
            My Profile
          </h1>

          {loading ? (
            <p className="text-center text-neutral-400">Loading...</p>
          ) : !user ? (
            <p className="text-center text-red-500">Unable to load profile.</p>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                {user.profileImg ? (
                  <img
                    src={user.profileImg}
                    alt="profile"
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#F7B614]"
                  />
                ) : (
                  <FaUserCircle className="w-20 h-20 text-neutral-600" />
                )}
                <div>
                  <h2 className="text-2xl font-semibold">{user.name}</h2>
                  <p className="text-neutral-400 text-sm capitalize">{user.type}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-sm">
                <div>
                  <p className="text-neutral-500">Email</p>
                  <p className="text-white font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-neutral-500">Phone</p>
                  <p className="text-white font-medium">{user.phone}</p>
                </div>
                <div>
                  <p className="text-neutral-500">City</p>
                  <p className="text-white font-medium capitalize">{user.city}</p>
                </div>
                <div>
                  <p className="text-neutral-500">Location</p>
                  <p className="text-white font-medium">
                    {user.location?.coordinates ? `${user.location.coordinates[1]}, ${user.location.coordinates[0]}` : "N/A"}
                  </p>
                </div>
              </div>

              {user.location?.coordinates && Array.isArray(user.location.coordinates) && (
                <div className="pt-4">
                  <p className="text-neutral-400 text-sm mb-2">Location on Map</p>
                  <MapContainer
                    center={[user.location.coordinates[1], user.location.coordinates[0]]}
                    zoom={13}
                    style={{ height: "300px", width: "100%", borderRadius: "12px" }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[user.location.coordinates[1], user.location.coordinates[0]]}>
                      <Popup>{user.name} - {user.city}</Popup>
                    </Marker>
                  </MapContainer>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default MyProfile;
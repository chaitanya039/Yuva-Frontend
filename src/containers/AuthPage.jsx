import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../utils/api";
import MainLayout from "../components/MainLayout";

const dummyImg =
  "https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    type: "Retailer",
    profileImg: null,
  });
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImg") {
      const file = files[0];
      setForm({ ...form, profileImg: file });
      setPreview(file ? URL.createObjectURL(file) : null);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validateForm = () => {
    if (!form.email || !form.password) {
      toast.error("Email and password are required");
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    if (!isLogin) {
      if (!form.name || !form.phone || !form.city || !form.type) {
        toast.error("Please fill all required fields");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (!isLogin) {
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("password", form.password);
        formData.append("city", form.city);
        formData.append("type", form.type);
        formData.append("profileImg", form.profileImg || dummyImg);

        const res = await api.post("/auth/customer/register", formData);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Registration successful!");
      } else {
        const { data: res } = await api.post("/auth/customer/login", {
          email: form.email,
          password: form.password,
        });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Login successful!");
      }

      setTimeout(() => navigate("/"), 500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white px-4 py-32">
        <motion.div
          className="relative backdrop-blur-xl bg-white/5 border border-[#F7B614] w-full max-w-xl rounded-xl p-8 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Toggle Tabs */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-6 py-2 font-semibold rounded-l-lg transition ${
                isLogin
                  ? "bg-[#F7B614] text-black"
                  : "bg-neutral-800 text-white"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-6 py-2 font-semibold rounded-r-lg transition ${
                !isLogin
                  ? "bg-[#F7B614] text-black"
                  : "bg-neutral-800 text-white"
              }`}
            >
              Signup
            </button>
          </div>

          {/* Form */}
          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? "login" : "signup"}
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {!isLogin && (
                <>
                  {/* Profile Image Preview */}
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#F7B614] shadow-lg">
                      <img
                        src={preview || dummyImg}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="inputField"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="inputField"
                    required
                  />

                  {/* Type Dropdown */}
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="inputField bg-neutral-800 text-white"
                    required
                  >
                    <option value="Retailer">Retailer</option>
                    <option value="Wholesaler">Wholesaler</option>
                  </select>
                </>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="inputField"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="inputField"
                required
              />

              {!isLogin && (
                <>
                  <input
                    type="text"
                    name="city"
                    placeholder="City (e.g., Pathari, Parbhani)"
                    value={form.city}
                    onChange={handleChange}
                    className="inputField"
                    required
                  />
                  <input
                    type="file"
                    name="profileImg"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full text-sm text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#F7B614] file:text-black hover:file:bg-yellow-400 transition"
                  />
                </>
              )}

              <button
                type="submit"
                className="w-full bg-[#F7B614] text-black font-bold py-2 rounded-md hover:bg-yellow-400 transition flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-t-transparent border-black rounded-full animate-spin"></div>
                ) : isLogin ? (
                  "Login"
                ) : (
                  "Create Account"
                )}
              </button>
            </motion.form>
          </AnimatePresence>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default AuthPage;

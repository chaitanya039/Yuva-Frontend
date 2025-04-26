import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./containers/Home/Home";
import AuthPage from "./containers/AuthPage";
import { Toaster } from "react-hot-toast";
import CategoryProducts from "./containers/CategoryProducts";
import AllProducts from "./containers/AllProducts";
import ProductDetails from "./containers/ProductDetails";
import OrderSuccess from "./containers/OrderSuccess";
import Cart from "./containers/Cart";
import ScrollToTop from "./components/ScrollToTop";
import MyProfile from "./containers/MyProfile";
import CustomerOrderRequests from "./containers/CustomerOrderRequests";

// Utility for checking auth
const isAuthenticated = () => {
  const token = localStorage.getItem("customer_token");
  return !!token;
};

// Wrapper for protected routes
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/auth" replace />;
};

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route
            path="/category/:categoryId/products"
            element={<CategoryProducts />}
          />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Auth Page: only if not logged in */}
          <Route
            path="/auth"
            element={
              isAuthenticated() ? <Navigate to="/" replace /> : <AuthPage />
            }
          />

          {/* Protected Routes */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-requests"
            element={
              <ProtectedRoute>
                <CustomerOrderRequests />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-success"
            element={
              <ProtectedRoute>
                <OrderSuccess />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

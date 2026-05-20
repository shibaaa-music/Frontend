import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import PopupRegister from "./components/PopupRegister";
import FloatingContact from "./components/FloatingContact";
import api from "./utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [registrations, setRegistrations] = useState([]);
  const [showPopupRegister, setShowPopupRegister] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    const isHomePage = location.pathname === "/" && !location.hash;
    setShowPopupRegister(isHomePage);

    // Tự động load dữ liệu khi vào trang admin
    if (location.pathname === "/admin" && isLoggedIn) {
      loadData();
    }
  }, [location.pathname, isLoggedIn]);

  const handleClosePopup = () => {
    setShowPopupRegister(false);
  };

  const loadData = async () => {
    try {
      const response = await api.get("/registrations");
      setRegistrations(response.data);
    } catch (err) {
      console.error("Failed to load registrations:", err);
      // Nếu 401 (Unauthorized), có thể do token/adminId hết hạn
      if (err.response && err.response.status === 401) {
        handleLogout();
      }
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    loadData();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  const refreshData = () => {
    loadData();
  };

  return (
    <div className="app">
      <Navigation isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:category"
            element={<Products />}
          />
          <Route path="/products/detail/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/admin"
            element={
              isLoggedIn ? (
                <AdminDashboard registrations={registrations} onRefresh={refreshData} />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
      {showPopupRegister && <PopupRegister onClose={handleClosePopup} />}
    </div>
  );
}

export default App;

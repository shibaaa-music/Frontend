import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navigation({ isLoggedIn, onLogout }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <img src="/images/logo.png" alt="Ero Riverside" />
          <div className="nav-logo-text">
            <span className="nav-logo-title">ERO RIVERSIDE</span>
            <span className="nav-logo-subtitle">Nam Từ Sơn</span>
          </div>
        </a>

        <ul className="nav-menu">
          <li className="nav-item nav-dropdown">
            <NavLink to="/" className="nav-link">
              Tổng quan
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </NavLink>
            <div className="dropdown-menu">
              <a href="/#gioi-thieu-du-an" className="dropdown-item">
                Giới thiệu dự án
              </a>
              <a href="/#thong-tin-du-an" className="dropdown-item">
                Thông tin dự án
              </a>
              <a href="/#5-ly-do" className="dropdown-item">
                5 lý do nên đầu tư
              </a>
              <a href="/#vi-tri" className="dropdown-item">
                Vị trí
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              href="https://online.fliphtml5.com/fallo/ezcq/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Catalog
            </a>
          </li>
          <li className="nav-item">
            <a href="/#san-pham" className="nav-link">
              Sản phẩm
            </a>
          </li>
          <li className="nav-item">
            <a href="/#tien-ich" className="nav-link">
              Tiện ích
            </a>
          </li>
          <li className="nav-item">
            <a href="/#album" className="nav-link">
              Album
            </a>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">
              Đăng ký tư vấn
            </NavLink>
          </li>
        </ul>

        <div className="nav-auth">
          {isLoggedIn ? (
            <>
              <Link to="/admin" className="btn btn-secondary">
                Quản trị
              </Link>
              <button onClick={onLogout} className="btn btn-outline">
                Đăng xuất
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-secondary">
              Đăng nhập
            </Link>
          )}
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/">Tổng quan</a>
          </li>
          <li>
            <a href="/#san-pham">Sản phẩm</a>
          </li>
          <li>
            <a href="/#album">Album</a>
          </li>
          <li>
            <Link to="/register">Liên hệ</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/admin">Quản trị</Link>
              </li>
              <li>
                <button
                  onClick={onLogout}
                  style={{
                    background: "none",
                    border: "none",
                    width: "100%",
                    textAlign: "left",
                    padding: "15px",
                    fontWeight: "500",
                    color: "#b20000",
                  }}
                >
                  Đăng xuất
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

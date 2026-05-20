import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-about">
              <div className="footer-logo">
                <img src="/images/logo.png" alt="Ero Riverside" />
                <div className="footer-logo-text">
                  <span className="footer-logo-title">Ero Riverside</span>
                  <span className="footer-logo-subtitle">Nam Từ Sơn</span>
                </div>
              </div>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/profile.php?id=61582427617215#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-fb"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://zalo.me/0915863928"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zalo"
                  className="social-zalo"
                >
                  <span>Z</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="social-ytb"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon
                      points="9.75,15.02 15.5,11.75 9.75,8.48"
                      fill="white"
                      opacity="0.7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Liên kết</h4>
              <ul>
                <li>
                  <a href="/#gioi-thieu-du-an">Giới thiệu dự án</a>
                </li>
                <li>
                  <a href="/#san-pham">Sản phẩm</a>
                </li>
                <li>
                  <a href="/#vi-tri">Vị trí</a>
                </li>
                <li>
                  <a href="/#tien-ich">Tiện ích</a>
                </li>
                <li>
                  <a href="/#5-ly-do">5 Lý do chọn</a>
                </li>
                <li>
                  <Link to="/register">Đăng ký tư vấn</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Sản phẩm</h4>
              <ul>
                <li>
                  <a href="/products/detail/biet_thu_song_lap">
                    Biệt thự Song lập
                  </a>
                </li>
                <li>
                  <a href="/products/detail/biet_thu_don_lap">
                    Biệt thự Đơn lập
                  </a>
                </li>
                <li>
                  <a href="/products/detail/van_phong_cao_oc">
                    Văn phòng - Cao ốc
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col footer-contact-col">
              <h4>Liên hệ</h4>
              <ul className="footer-contact">
                <li>
                  <span className="contact-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact-label">Hotline</span>
                    <a href="tel:0915863928" className="contact-value">
                      0915863928
                    </a>
                  </div>
                </li>
                <li>
                  <span className="contact-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact-label">Địa chỉ</span>
                    <span className="contact-value">
                      Phường Phù Chẩn, Thị xã Từ Sơn, Bắc Ninh
                    </span>
                  </div>
                </li>
                <li>
                  <span className="contact-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact-label">Giờ làm việc</span>
                    <span className="contact-value">8:00 - 20:00</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Ero Riverside. All rights reserved.</p>
          <p className="footer-developer">Chủ đầu tư: Công ty CP Thiên Đức</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

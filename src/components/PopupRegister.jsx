import { useState } from "react";
import api from "../utils/api";

function PopupRegister({ onClose }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const registrationData = {
      full_name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email") || "",
    };

    try {
      await api.post("/registrations", registrationData);
      setShowSuccess(true);

      setTimeout(() => {
        handleClose();
      }, 2500);
    } catch (err) {
      console.error("Popup registration error:", err);
      setError("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="popup-overlay">
        <div
          className="popup-content success-popup"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="success-icon">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h2 className="success-title">ĐĂNG KÝ THÀNH CÔNG!</h2>
          <p className="success-message">
            Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ bạn sớm nhất có thể.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={handleClose} aria-label="Đóng">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <div className="popup-banner">
          <div className="popup-banner-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h3>ĐĂNG KÝ NHẬN TƯ VẤN MIỄN PHÍ</h3>
          <p>
            Chúng tôi sẽ liên hệ lại ngay sau khi nhận được thông tin của bạn
          </p>
        </div>

        <form onSubmit={handleSubmit} className="popup-form">
          {error && (
            <p
              style={{
                color: "red",
                fontSize: "13px",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              {error}
            </p>
          )}
          <div className="popup-input-wrapper">
            <div className="popup-input-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <input type="text" name="name" placeholder="Họ và tên" required />
          </div>

          <div className="popup-input-wrapper">
            <div className="popup-input-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              required
            />
          </div>

          <div className="popup-input-wrapper">
            <div className="popup-input-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email (không bắt buộc)"
            />
          </div>

          <button type="submit" className="popup-submit-btn" disabled={loading}>
            <span>{loading ? "ĐANG GỬI..." : "GỬI NGAY"}</span>
            {!loading && (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            )}
          </button>
        </form>

        <div className="popup-footer">
          <div className="popup-contact">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>Hotline: 0915863928</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupRegister;

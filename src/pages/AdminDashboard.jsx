import { Link } from "react-router-dom";
import { useEffect } from "react";
import api from "../utils/api";

function AdminDashboard({ registrations, onRefresh }) {
  useEffect(() => {
    onRefresh();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa đăng ký này?")) {
      try {
        await api.delete(`/registrations/${id}`);
        onRefresh();
      } catch (err) {
        console.error("Failed to delete registration:", err);
        alert("Không thể xóa đăng ký này. Vui lòng thử lại.");
      }
    }
  };

  const currentRegs = registrations || [];
  const VN_OFFSET_MS = 7 * 60 * 60 * 1000;
  const toVietnamDate = (dateValue) =>
    new Date(new Date(dateValue).getTime() + VN_OFFSET_MS);
  const todayVietnam = toVietnamDate(new Date()).toDateString();

  return (
    <div className="admin-section">
      <div className="container">
        <div className="admin-container">
          <div className="admin-header">
            <h1>📊 Quản lý đăng ký khách hàng</h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Danh sách khách hàng đã đăng ký tư vấn dự án
            </p>
          </div>

          <div className="admin-btn-group">
            <Link to="/" className="admin-btn admin-btn-primary">
              ← Về trang chủ
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="admin-stats">
            <div className="stat-card">
              <div>📝</div>
              <h3>{currentRegs.length}</h3>
              <p>Tổng đăng ký</p>
            </div>
            <div className="stat-card">
              <div>📅</div>
              <h3>
                {
                  currentRegs.filter(
                    (r) =>
                      r.created_at &&
                      toVietnamDate(r.created_at).toDateString() ===
                        todayVietnam,
                  ).length
                }
              </h3>
              <p>Đăng ký hôm nay</p>
            </div>
          </div>

          {/* Registrations Table */}
          <div>
            <h2
              style={{
                marginBottom: "25px",
                color: "var(--primary)",
                fontSize: "22px",
              }}
            >
              📋 Danh sách đăng ký
            </h2>
            {currentRegs.length > 0 ? (
              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Họ và tên</th>
                      <th>Điện thoại</th>
                      <th>Email</th>
                      <th>Ngày đăng ký</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRegs
                      .slice()
                      .reverse()
                      .map((reg, index) => (
                        <tr key={reg.id}>
                          <td>
                            <strong>{currentRegs.length - index}</strong>
                          </td>
                          <td style={{ fontWeight: "500" }}>{reg.full_name}</td>
                          <td>
                            <a
                              href={`tel:${reg.phone}`}
                              style={{ color: "var(--primary)" }}
                            >
                              {reg.phone}
                            </a>
                          </td>
                          <td>
                            {reg.email ? (
                              <a
                                href={`mailto:${reg.email}`}
                                style={{ color: "var(--primary)" }}
                              >
                                {reg.email}
                              </a>
                            ) : (
                              "-"
                            )}
                          </td>
                          <td>
                            {reg.created_at
                              ? toVietnamDate(
                                  reg.created_at,
                                ).toLocaleDateString("vi-VN", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })
                              : "-"}
                          </td>
                          <td>
                            <button
                              onClick={() => handleDelete(reg.id)}
                              className="admin-action-btn delete"
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="admin-empty">
                <div className="admin-empty-icon">📭</div>
                <p>Chưa có đăng ký nào</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

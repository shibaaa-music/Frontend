import { useState } from "react";
import { Link } from "react-router-dom";

function Products({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "Tất cả" },
    { value: "biet_thu_song_lap", label: "Biệt thự song lập" },
    { value: "biet_thu_don_lap", label: "Biệt thự đơn lập" },
    { value: "van_phong_cao_oc", label: "Văn phòng - Cao ốc" },
  ];

  const sanPhamItems = [
    {
      id: "biet_thu_song_lap",
      image: "./../../public/images/biet-thu-song-lap-phong-cach-hien-dai.jpg",
      title: "Biệt thự song lập",
      dtxd: "120 m²",
      dtsan: "360 m²",
      dtdat: "320-380 m²",
      desc: "Bố trí thành từng cặp trên mỗi lô riêng với không gian thoáng, nội thất sang trọng, hài hòa và hợp lý.",
      category: "biet_thu_song_lap",
      link: "/products/detail/biet_thu_song_lap",
    },
    {
      id: "biet_thu_don_lap",
      image: "./../../public/images/biet-thu-don-lap.jpg",
      title: "Biệt thự đơn lập",
      dtxd: "140 m²",
      dtsan: "420 m²",
      dtdat: "400-560 m²",
      desc: "Kiến trúc châu Âu hiện đại với sân vườn, bể bơi, sân tennis. An ninh 24/24 tuyệt đối.",
      category: "biet_thu_don_lap",
      link: "/products/detail/biet_thu_don_lap",
    },
    {
      id: "van_phong_cao_oc",
      image: "./../../public/images/van-phong-cao-oc.jpg",
      title: "Văn phòng - Cao ốc",
      dtxd: "3500 m²",
      dtsan: "12600 m²",
      dtdat: "18 tầng",
      desc: "18 tầng gồm 3 tầng hầm xe, 3 tầng thương mại, các tầng còn lại cho thuê. Vị trí ngay QL1B.",
      category: "van_phong_cao_oc",
      link: "/products/detail/van_phong_cao_oc",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? sanPhamItems
      : sanPhamItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1>Danh mục sản phẩm</h1>
          <p>Đáp ứng mọi nhu cầu thực của quý khách hàng</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title line-title">Sản phẩm đa dạng</h2>
          <p className="section-subtitle">
            Đáp ứng mọi nhu cầu thực của quý khách hàng
          </p>

          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`category-tab ${selectedCategory === cat.value ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredItems.map((item, index) => (
              <Link to={item.link} key={index} className="product-card">
                <span className="product-badge">Hot</span>
                <div className="product-card-image">
                  <img src={item.image} alt={item.title} />
                  <div className="product-card-overlay">
                    <span>Xem chi tiết</span>
                  </div>
                </div>
                <div className="product-card-content">
                  <h4>{item.title}</h4>
                  <p className="product-desc">{item.desc}</p>
                  <div className="product-specs">
                    <div className="product-spec-item">
                      <span className="spec-label">Diện tích xây dựng</span>
                      <span className="spec-value">{item.dtxd}</span>
                    </div>
                    <div className="product-spec-item">
                      <span className="spec-label">Diện tích sàn</span>
                      <span className="spec-value">{item.dtsan}</span>
                    </div>
                    <div className="product-spec-item">
                      <span className="spec-label">Diện tích đất</span>
                      <span className="spec-value">{item.dtdat}</span>
                    </div>
                  </div>
                  <span className="btn btn-primary">Xem chi tiết</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Bạn quan tâm đến sản phẩm Ero Riverside?</h2>
          <p>Liên hệ ngay để được tư vấn chi tiết và nhận ưu đãi tốt nhất</p>
          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary">
              ĐĂNG KÝ TƯ VẤN
            </Link>
            <a
              href="tel:0915863928"
              className="btn btn-outline"
              style={{ borderColor: "white", color: "white" }}
            >
              GỌI NGAY
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ gallery = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/banner-trang-chu.jpg",
      title: "ĐÔ THỊ THƯỢNG LƯU",
      subtitle: "RỰC SÁNG VÙNG THỦ ĐÔ",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const projectInfo = [
    { label: "Tên chính thức", value: "Khu đô thị mới Nam Từ Sơn" },
    { label: "Tên thương mại", value: "Ero Riverside" },
    { label: "Mã dự án", value: "7782" },
    {
      label: "Vị trí",
      value: "Phường Phù Chẩn, Thị xã Từ Sơn, Tỉnh Bắc Ninh",
    },
    { label: "Chủ đầu tư", value: "Công ty CP Thiên Đức" },
    { label: "Tổng diện tích", value: "21ha" },
    { label: "Pháp lý", value: "Sổ đỏ từng lô" },
  ];

  const tienIchItems = [
    {
      image: "/images/tien-ich-1.jpg",
      title: "QUẢNG TRƯỜNG",
    },
    {
      image: "/images/tien-ich-2.jpg",
      title: "CÔNG VIÊN PHỐ ĐI BỘ",
    },
    {
      image: "/images/tien-ich-3.jpg",
      title: "TỔ HỢP HAPPY ZONE",
    },
    {
      image: "/images/tien-ich-4.jpg",
      title: "CÔNG VIÊN NHẠC NƯỚC",
    },
    {
      image: "/images/tien-ich-5.jpg",
      title: "CÔNG VIÊN SINH THÁI",
    },
    {
      image: "/images/tien-ich-6.jpg",
      title: "TRƯỜNG MẦM NON",
    },
    {
      image: "/images/tien-ich-7.jpg",
      title: "SÂN PICKLEBALL",
    },
    {
      image: "/images/tien-ich-8.jpg",
      title: "TRUNG NGUYÊN E-COFFEE",
    },
    {
      image: "/images/tien-ich-9.jpg",
      title: "SÂN CHƠI THỂ THAO",
    },
    {
      image: "/images/tien-ich-10.jpg",
      title: "TRẠM SẠC XE ĐIỆN",
    },
  ];

  const sanPhamItems = [
    {
      image: "./images/biet_thu_song_lap.png",
      title: "BIỆT THỰ SONG LẬP",
      dtxd: "120m²",
      dtsan: "360m²",
      dtdat: "320-380m²",
      units: "181 căn",
      totalArea: "32938 m²",
      desc: "Bố trí thành từng cặp trên mỗi lô riêng với không gian thoáng, nội thất sang trọng, hài hòa và hợp lý.",
      link: "/products/detail/biet_thu_song_lap",
    },
    {
      image: "./../../public/images/biet_thu_don_lap.png",
      title: "BIỆT THỰ ĐƠN LẬP",
      dtxd: "140m²",
      dtsan: "420m²",
      dtdat: "400-560m²",
      units: "104 căn",
      totalArea: "42908 m²",
      desc: "Kiến trúc châu Âu hiện đại với sân vườn, bể bơi, sân tennis. An ninh 24/24 tuyệt đối.",
      link: "/products/detail/biet_thu_don_lap",
    },
    {
      image: "./../../public/images/van-phong-cao-oc.png",
      title: "VĂN PHÒNG-CAO ỐC",
      dtxd: "3500m²",
      dtsan: "12600m²",
      dtdat: "18 tầng",
      desc: "18 tầng gồm 3 tầng hầm xe, 3 tầng thương mại, các tầng còn lại cho thuê. Vị trí ngay QL1B.",
      link: "/products/detail/van_phong_cao_oc",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.title} className="hero-image" />
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <div className="hero-special-badge">Đặc biệt</div>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>

                <div className="hero-buttons">
                  <Link to="/register" className="btn btn-secondary">
                    ĐĂNG KÝ NGAY
                  </Link>
                  <a href="/#san-pham" className="btn btn-primary">
                    XEM SẢN PHẨM
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Giới thiệu dự án */}
      <section className="section gioi-thieu-section" id="gioi-thieu-du-an">
        <div className="container">
          <h2 className="section-title line-title">
            Giới thiệu dự án đô thị ERO RIVERSIDE HÀ NỘI - BẮC NINH
          </h2>
          <p className="section-subtitle">
            "Một không gian châu Âu trong lòng Hà Nội - Bắc Ninh"
          </p>
          <div className="gioi-thieu-grid">
            <div className="gioi-thieu-image-wrapper">
              <div className="gioi-thieu-image-frame">
                <img
                  src="/images/mat-bang.jpg"
                  alt="Khu đô thị Nam Từ Sơn"
                  className="gioi-thieu-image"
                />
              </div>
              <div className="gioi-thieu-decor gioi-thieu-decor-tl"></div>
              <div className="gioi-thieu-decor gioi-thieu-decor-br"></div>
            </div>
            <div className="gioi-thieu-content">
              <p>
                Dự án khu đô thị mới Nam Từ Sơn hay còn được biết đến với tên
                gọi mỹ miều là{" "}
                <strong>
                  "Một không gian châu Âu trong lòng Hà Nội - Bắc Ninh"
                </strong>
                . Với diện tích quy hoạch lên đến <strong>21ha</strong>, nơi đây
                được đánh giá là vùng đất "thiên thời, địa lợi, nhân hòa" khi
                hội đủ những yếu tố thuận lợi nhất để hình thành nên một khu đô
                thị kiểu mẫu với những ưu thế đặc biệt.
              </p>
              <p>
                Mạng lưới giao thông nối liền <strong>cầu Thanh Trì</strong>{" "}
                giúp rút ngắn khoảng cách từ khu đô thị Nam Từ Sơn tới thủ đô Hà
                Nội cũng như các nút giao thông khác. Ngoài ra, dự án còn xây
                dựng mức <strong>271 song song cầu Đại Đình</strong> hiện đại,
                đảm bảo phục vụ giao thông rất tiện lợi.
              </p>
              <p>
                Khu đô thị Nam Từ Sơn được coi là một trong những dự án hạt nhân
                của chiến lược phát triển đô thị mở rộng của hai thành phố lớn
                Hà Nội và Bắc Ninh, song song với đó là các khu kinh tế xã hội
                trong khu vực mở rộng này.
              </p>
              <p>
                Với quy chế quản lý chuyên nghiệp cùng đội ngũ nhân viên năng
                động và tràn đầy kinh nghiệm, chắc chắn rằng những cư dân nơi
                đây sẽ được sống trong một xã hội văn hoá cao, thuận tiện và
                được phục vụ chu đáo tận tình.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thông tin dự án */}
      <section
        className="section thong-tin-section"
        id="thong-tin-du-an"
        style={{ padding: "40px 0" }}
      >
        <div className="thong-tin-grid">
          <div className="thong-tin-image-side">
            <img
              src="/images/gioi-thieu.png"
              alt="Thông tin dự án Ero Riverside"
              className="thong-tin-bg-image"
            />
          </div>
          <div className="thong-tin-content">
            <h3
              className="thong-tin-name"
              style={{ fontSize: "24px", marginBottom: "8px" }}
            >
              ERO RIVERSIDE
            </h3>
            <p
              className="thong-tin-subtitle"
              style={{ fontSize: "14px", marginBottom: "12px" }}
            >
              MỞ BÁN PHÂN KHU MỚI
            </p>
            <ul className="thong-tin-list" style={{ gap: "8px" }}>
              {projectInfo.map((info, i) => (
                <li
                  key={i}
                  className="thong-tin-item"
                  style={{ fontSize: "13px", marginBottom: "6px" }}
                >
                  <span className="thong-tin-icon">★</span>
                  <span>
                    <strong>{info.label}:</strong> {info.value}
                  </span>
                </li>
              ))}
            </ul>
            <div style={{ textAlign: "center", marginTop: "16px" }}>
              <Link to="/register" className="btn btn-primary">
                ĐĂNG KÝ NGAY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Lý do chọn dự án */}
      <section className="ly-do-section" id="5-ly-do">
        <div className="ly-do-bg-pattern"></div>
        <div className="container ly-do-container">
          <div className="ly-do-header">
            <span className="ly-do-badge">Tại sao chọn Ero Riverside</span>
            <h2 className="ly-do-title">5 Lý do nên đầu tư</h2>
            <div className="ly-do-title-line"></div>
            <p className="ly-do-subtitle">
              Khám phá những ưu thế vượt trội của khu đô thị Nam Từ Sơn
            </p>
          </div>
          <div className="ly-do-wrapper">
            <div className="ly-do-image-col">
              <div className="ly-do-image-wrapper">
                <img
                  src="/images/5-ly-do.jpg"
                  alt="5 Lý do chọn dự án"
                  className="ly-do-img"
                />
                <div className="ly-do-image-border"></div>
                <div className="ly-do-image-accent"></div>
                <div className="ly-do-image-accent-2"></div>
                <div className="ly-do-image-accent-3"></div>
              </div>
              <div className="ly-do-decoration-1"></div>
              <div className="ly-do-decoration-2"></div>
            </div>
            <div className="ly-do-content-col">
              <div className="ly-do-item">
                <div className="ly-do-num-wrapper">
                  <div className="ly-do-num">1</div>
                  <div className="ly-do-num-line"></div>
                </div>
                <div className="ly-do-text">
                  <h3 className="ly-do-item-title">Vị trí đắc địa bậc nhất</h3>
                  <p className="ly-do-desc">
                    Tọa lạc tại "thủ phủ công nghiệp" - quy mô lớn thứ 5 cả
                    nước, thứ 2 miền Bắc, tốc độ tăng trưởng cao nhất nhiều năm.
                  </p>
                </div>
              </div>
              <div className="ly-do-item">
                <div className="ly-do-num-wrapper">
                  <div className="ly-do-num">2</div>
                  <div className="ly-do-num-line"></div>
                </div>
                <div className="ly-do-text">
                  <h3 className="ly-do-item-title">
                    Hạ tầng đồng bộ chuẩn quốc tế
                  </h3>
                  <p className="ly-do-desc">
                    Thiết kế đồng bộ từ hạ tầng kỹ thuật đến xã hội theo tiêu
                    chuẩn quốc tế, kiến trúc hiện đại Châu Âu.
                  </p>
                </div>
              </div>
              <div className="ly-do-item">
                <div className="ly-do-num-wrapper">
                  <div className="ly-do-num">3</div>
                  <div className="ly-do-num-line"></div>
                </div>
                <div className="ly-do-text">
                  <h3 className="ly-do-item-title">Giao thông thuận lợi</h3>
                  <p className="ly-do-desc">
                    Kết nối cầu Thanh Trì, rút ngắn khoảng cách đến Hà Nội và
                    các nút giao thông trong khu vực.
                  </p>
                </div>
              </div>
              <div className="ly-do-item">
                <div className="ly-do-num-wrapper">
                  <div className="ly-do-num">4</div>
                  <div className="ly-do-num-line"></div>
                </div>
                <div className="ly-do-text">
                  <h3 className="ly-do-item-title">
                    Môi trường sống trong lành
                  </h3>
                  <p className="ly-do-desc">
                    Công viên trung tâm với mặt nước và cây xanh - lá phổi điều
                    hòa không khí cho toàn khu đô thị.
                  </p>
                </div>
              </div>
              <div className="ly-do-item">
                <div className="ly-do-num-wrapper">
                  <div className="ly-do-num">5</div>
                  <div className="ly-do-num-line"></div>
                </div>
                <div className="ly-do-text">
                  <h3 className="ly-do-item-title">Pháp lý minh bạch</h3>
                  <p className="ly-do-desc">
                    Diện tích lô đất hợp lý, bàn giao nhanh, hạ tầng hoàn thiện
                    100%, sổ đỏ từng lô.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vị trí */}
      <section className="vi-tri-section" id="vi-tri">
        <div className="container">
          <div className="vi-tri-header">
            <h2 className="vi-tri-main-title">TÂM ĐIỂM GIAO THOA</h2>
            <p className="vi-tri-subtitle">
              KẾT NỐI THỦ ĐÔ, CHẠM TỚI PHỒN VINH
            </p>
          </div>

          <div className="vi-tri-content-wrapper">
            <div className="vi-tri-map">
              <a
                href="https://www.google.com/maps?q=21.086694,105.961528"
                target="_blank"
                rel="noopener noreferrer"
                className="vi-tri-map-link"
              >
                <img src="/images/map_animaiton_1.gif" alt="Bản đồ vị trí" />
                <span className="vi-tri-map-hint">
                  Nhấn để xem vị trí cụ thể trong Google Map
                </span>
              </a>
            </div>
            <div className="vi-tri-info">
              <p className="vi-tri-desc">
                Tọa lạc tại vị trí đắc địa thuộc phường Phù Chẩn, thị xã Từ Sơn,
                tỉnh Bắc Ninh. Khu đô thị Nam Từ Sơn được coi là “mảnh đất vàng”
                khi nằm ngay tại trung tâm kinh tế được coi là sầm uất bậc nhất
                thị xã Từ Sơn. Không chỉ là cửa ngõ giúp kết nối với các địa
                điểm trọng yếu mà dự án khu đô thị Nam Từ Sơn còn là điểm nút
                giao khiến cho việc kết nối đến thành phố Bắc Ninh cũng như các
                khu công nghiệp lớn trong và ngoài Bắc Ninh trở nên dễ dàng hơn.
              </p>
              <div className="location-cards">
                <div className="location-card">
                  <h3>15 phút</h3>
                  <p>Đến thành phố Bắc Ninh</p>
                </div>
                <div className="location-card">
                  <h3>20 phút</h3>
                  <p>Đến thủ đô Hà Nội</p>
                </div>
                <div className="location-card">
                  <h3>20 phút</h3>
                  <p>Đến sân bay Gia Bình</p>
                </div>
                <div className="location-card">
                  <h3>30 phút</h3>
                  <p>Đến sân bay Nội Bài</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sản phẩm */}
      <section className="product-section" id="san-pham">
        <div className="bg-pattern"></div>
        <div className="bg-line bg-line-1"></div>
        <div className="bg-line bg-line-2"></div>
        <div className="container">
          <h2 className="section-title line-title">Sản phẩm đa dạng</h2>
          <p className="section-subtitle">
            Đáp ứng mọi nhu cầu thực của quý khách hàng
          </p>
          <div className="san-pham-grid">
            {sanPhamItems.map((item, index) => (
              <a href={item.link} key={index} className="san-pham-card">
                <div className="san-pham-card-image">
                  <img src={item.image} alt={item.title} />
                  <div className="san-pham-card-overlay">
                    <span className="xem-chi-tiet-btn">Xem chi tiết</span>
                  </div>
                </div>
                <div className="san-pham-card-content">
                  <h4>{item.title}</h4>
                  <div className="san-pham-specs">
                    {!item.units && (
                      <>
                        <p>
                          Diện tích xây dựng: <strong>{item.dtxd}</strong>
                        </p>
                        <p>
                          Diện tích sàn: <strong>{item.dtsan}</strong>
                        </p>
                        <p>
                          Diện tích đất: <strong>{item.dtdat}</strong>
                        </p>
                      </>
                    )}
                    {item.units && (
                      <>
                        <p>
                          Số căn: <strong>{item.units}</strong>
                        </p>
                        <p>
                          Tổng diện tích: <strong>{item.totalArea}</strong>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tiện ích */}
      <section className="tien-ich-section" id="tien-ich">
        <div className="tien-ich-bg"></div>
        <div className="container">
          <div className="tien-ich-header">
            <h2 className="line-title">TỔ HỢP TIỆN ÍCH ĐẲNG CẤP</h2>
          </div>
          <div className="tien-ich-grid">
            {tienIchItems.map((item, index) => (
              <div key={index} className="tien-ich-item">
                <div className="tien-ich-card">
                  <div className="tien-ich-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="tien-ich-content">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Album */}
      <section className="album-section" id="album">
        <div className="album-decor album-decor-1"></div>
        <div className="album-decor album-decor-2"></div>
        <div className="album-decor album-decor-3"></div>
        <div className="container">
          <div className="album-header">
            <h2 className="album-title line-title">ALBUM HÌNH ẢNH</h2>
            <p className="album-subtitle">
              KHÁM PHÁ KHÔNG GIAN SỐNG ĐẲNG CẤP TẠI ERO RIVERSIDE
            </p>
          </div>

          <div className="album-wrapper">
            <img
              src="/images/album.jpeg"
              alt="Album hình ảnh dự án"
              className="album-main-image"
            />
          </div>
        </div>
      </section>

      {/* Video Giới thiệu */}
      <section className="video-intro-section" id="video-gioi-thieu">
        <div className="video-intro-decor video-intro-decor-1"></div>
        <div className="video-intro-decor video-intro-decor-2"></div>
        <div className="video-intro-decor video-intro-decor-3"></div>
        <div className="container">
          <div className="video-intro-header">
            <h2 className="video-intro-title line-title">VIDEO GIỚI THIỆU</h2>
            <p className="video-intro-subtitle">
              TÌM HIỂU CHI TIẾT VỀ DỰ ÁN ERO RIVERSIDE
            </p>
          </div>

          <div className="video-intro-wrapper">
            <div className="video-intro-container">
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/3S5XZniGqOI"
                title="Giới thiệu Ero Riverside"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-intro-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 style={{ fontSize: "24px" }}>
            Bạn quan tâm đến sản phẩm Ero Riverside?
          </h2>
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

export default Home;

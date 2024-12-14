import React from 'react'

const Inicio = () => {
  return (
 
  <main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section light-background">
    <div className="container">
      <div className="row gy-4 justify-content-center justify-content-lg-between">
        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">Disfruta de tu Salud<br />Deliciosa Comida</h1>
          <p data-aos="fade-up" data-aos-delay={100}>We are team of talented designers making websites with Bootstrap</p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
            <a href="#book-a-table" className="btn-get-started">Reservar una mesa</a>
            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
          <img src="assets/img/hero-img.png" className="img-fluid animated" alt />
        </div>
      </div>
    </div>
  </section>{/* /Hero Section */}
  {/* About Section */}
  <section id="about" className="about section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Nosotros<br /></h2>
      <p><span>Más</span> <span className="description-title">Información</span></p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-7" data-aos="fade-up" data-aos-delay={100}>
          <img src="assets/img/about.jpg" className="img-fluid mb-4" alt />
          <div className="book-a-table">
            <h3>Reservar una mesa</h3>
            <p>+1 5589 55488 55</p>
          </div>
        </div>
        <div className="col-lg-5" data-aos="fade-up" data-aos-delay={250}>
          <div className="content ps-0 ps-lg-5">
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check-circle-fill" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="bi bi-check-circle-fill" /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="bi bi-check-circle-fill" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
            <div className="position-relative mt-4">
              <img src="assets/img/about-2.jpg" className="img-fluid" alt />
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /About Section */}
  {/* Why Us Section */}
  <section id="why-us" className="why-us section light-background">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="why-box">
            <h3>Why Choose Yummy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
            </p>
            <div className="text-center">
              <a href="#" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right" /></a>
            </div>
          </div>
        </div>{/* End Why Box */}
        <div className="col-lg-8 d-flex align-items-stretch">
          <div className="row gy-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="col-xl-4">
              <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-clipboard-data" />
                <h4>Corporis voluptates officia eiusmod</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
            </div>{/* End Icon Box */}
            <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-gem" />
                <h4>Ullamco laboris ladore lore pan</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>{/* End Icon Box */}
            <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
              <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-inboxes" />
                <h4>Labore consequatur incidid dolore</h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>
            </div>{/* End Icon Box */}
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Why Us Section */}
  {/* Stats Section */}
  <section id="stats" className="stats section dark-background">
    <img src="assets/img/stats-bg.jpg" alt data-aos="fade-in" />
    <div className="container position-relative" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4">
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
            <p>Clients</p>
          </div>
        </div>{/* End Stats Item */}
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
            <p>Projects</p>
          </div>
        </div>{/* End Stats Item */}
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" />
            <p>Hours Of Support</p>
          </div>
        </div>{/* End Stats Item */}
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={1} className="purecounter" />
            <p>Workers</p>
          </div>
        </div>{/* End Stats Item */}
      </div>
    </div>
  </section>{/* /Stats Section */}
  {/* Menu Section */}
  <section id="menu" className="menu section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Our Menu</h2>
      <p><span>Check Our</span> <span className="description-title">Yummy Menu</span></p>
    </div>{/* End Section Title */}
    <div className="container">
      <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay={100}>
        <li className="nav-item">
          <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
            <h4>Starters</h4>
          </a>
        </li>{/* End tab nav item */}
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
            <h4>Breakfast</h4>
          </a>{/* End tab nav item */}
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
            <h4>Lunch</h4>
          </a>
        </li>{/* End tab nav item */}
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
            <h4>Dinner</h4>
          </a>
        </li>{/* End tab nav item */}
      </ul>
      <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
        <div className="tab-pane fade active show" id="menu-starters">
          <div className="tab-header text-center">
            <p>Menu</p>
            <h3>Starters</h3>
          </div>
          <div className="row gy-5">
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt /></a>
              <h4>Magnam Tiste</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $5.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt /></a>
              <h4>Aut Luia</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $14.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt /></a>
              <h4>Est Eligendi</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $8.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt /></a>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt /></a>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt /></a>
              <h4>Laboriosam Direva</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $9.95
              </p>
            </div>{/* Menu Item */}
          </div>
        </div>{/* End Starter Menu Content */}
        <div className="tab-pane fade" id="menu-breakfast">
          <div className="tab-header text-center">
            <p>Menu</p>
            <h3>Breakfast</h3>
          </div>
          <div className="row gy-5">
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt /></a>
              <h4>Magnam Tiste</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $5.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt /></a>
              <h4>Aut Luia</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $14.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt /></a>
              <h4>Est Eligendi</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $8.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt /></a>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt /></a>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt /></a>
              <h4>Laboriosam Direva</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $9.95
              </p>
            </div>{/* Menu Item */}
          </div>
        </div>{/* End Breakfast Menu Content */}
        <div className="tab-pane fade" id="menu-lunch">
          <div className="tab-header text-center">
            <p>Menu</p>
            <h3>Lunch</h3>
          </div>
          <div className="row gy-5">
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt /></a>
              <h4>Magnam Tiste</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $5.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt /></a>
              <h4>Aut Luia</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $14.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt /></a>
              <h4>Est Eligendi</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $8.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt /></a>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt /></a>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt /></a>
              <h4>Laboriosam Direva</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $9.95
              </p>
            </div>{/* Menu Item */}
          </div>
        </div>{/* End Lunch Menu Content */}
        <div className="tab-pane fade" id="menu-dinner">
          <div className="tab-header text-center">
            <p>Menu</p>
            <h3>Dinner</h3>
          </div>
          <div className="row gy-5">
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt /></a>
              <h4>Magnam Tiste</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $5.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt /></a>
              <h4>Aut Luia</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $14.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt /></a>
              <h4>Est Eligendi</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $8.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt /></a>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt /></a>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>{/* Menu Item */}
            <div className="col-lg-4 menu-item">
              <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt /></a>
              <h4>Laboriosam Direva</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $9.95
              </p>
            </div>{/* Menu Item */}
          </div>
        </div>{/* End Dinner Menu Content */}
      </div>
    </div>
  </section>{/* /Menu Section */}
  {/* Testimonials Section */}
  <section id="testimonials" className="testimonials section light-background">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>TESTIMONIALS</h2>
      <p>What Are They <span className="description-title">Saying About Us</span></p>
    </div>{/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="swiper init-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 text-center">
                  <img src="assets/img/testimonials/testimonials-1.jpg" className="img-fluid testimonial-img" alt />
                </div>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 text-center">
                  <img src="assets/img/testimonials/testimonials-2.jpg" className="img-fluid testimonial-img" alt />
                </div>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 text-center">
                  <img src="assets/img/testimonials/testimonials-3.jpg" className="img-fluid testimonial-img" alt />
                </div>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 text-center">
                  <img src="assets/img/testimonials/testimonials-4.jpg" className="img-fluid testimonial-img" alt />
                </div>
              </div>
            </div>
          </div>{/* End testimonial item */}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>{/* /Testimonials Section */}
  {/* Events Section */}
  <section id="events" className="events section">
    <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
      <div className="swiper init-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-1.jpg)'}}>
            <h3>Custom Parties</h3>
            <div className="price align-self-start">$99</div>
            <p className="description">
              Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
            </p>
          </div>{/* End Event item */}
          <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-2.jpg)'}}>
            <h3>Private Parties</h3>
            <div className="price align-self-start">$289</div>
            <p className="description">
              In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
            </p>
          </div>{/* End Event item */}
          <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-3.jpg)'}}>
            <h3>Birthday Parties</h3>
            <div className="price align-self-start">$499</div>
            <p className="description">
              Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
            </p>
          </div>{/* End Event item */}
          <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-4.jpg)'}}>
            <h3>Wedding Parties</h3>
            <div className="price align-self-start">$899</div>
            <p className="description">
              Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
            </p>
          </div>{/* End Event item */}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>{/* /Events Section */}
  {/* Chefs Section */}
  <section id="chefs" className="chefs section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>chefs</h2>
      <p><span>Our</span> <span className="description-title">Proffesional Chefs<br /></span></p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
          <div className="team-member">
            <div className="member-img">
              <img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt />
              <div className="social">
                <a href><i className="bi bi-twitter-x" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Walter White</h4>
              <span>Master Chef</span>
              <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
            </div>
          </div>
        </div>{/* End Chef Team Member */}
        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
          <div className="team-member">
            <div className="member-img">
              <img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt />
              <div className="social">
                <a href><i className="bi bi-twitter-x" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Patissier</span>
              <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
            </div>
          </div>
        </div>{/* End Chef Team Member */}
        <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
          <div className="team-member">
            <div className="member-img">
              <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt />
              <div className="social">
                <a href><i className="bi bi-twitter-x" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
            <div className="member-info">
              <h4>William Anderson</h4>
              <span>Cook</span>
              <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
            </div>
          </div>
        </div>{/* End Chef Team Member */}
      </div>
    </div>
  </section>{/* /Chefs Section */}
  {/* Book A Table Section */}
  <section id="book-a-table" className="book-a-table section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Reservar una mesa</h2>
      <p><span>Book Your</span> <span className="description-title">Stay With Us<br /></span></p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row g-0" data-aos="fade-up" data-aos-delay={100}>
        <div className="col-lg-4 reservation-img" style={{backgroundImage: 'url(assets/img/reservation.jpg)'}} />
        <div className="col-lg-8 d-flex align-items-center reservation-form-bg" data-aos="fade-up" data-aos-delay={200}>
          <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-lg-4 col-md-6">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="col-lg-4 col-md-6">
                <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" required />
              </div>
              <div className="col-lg-4 col-md-6">
                <input type="date" name="date" className="form-control" id="date" placeholder="Date" required />
              </div>
              <div className="col-lg-4 col-md-6">
                <input type="time" className="form-control" name="time" id="time" placeholder="Time" required />
              </div>
              <div className="col-lg-4 col-md-6">
                <input type="number" className="form-control" name="people" id="people" placeholder="# of people" required />
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
            </div>
            <div className="text-center mt-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
              <button type="submit">Book a Table</button>
            </div>
          </form>
        </div>{/* End Reservation Form */}
      </div>
    </div>
  </section>{/* /Book A Table Section */}
  {/* Gallery Section */}
  <section id="gallery" className="gallery section light-baground">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Gallery</h2>
      <p><span>Check</span> <span className="description-title">Our Gallery</span></p>
    </div>{/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="swiper init-swiper">
        <div className="swiper-wrapper align-items-center">
          <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-1.jpg"><img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt /></a></div>
          <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-2.jpg"><img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt /></a></div>
          <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-3.jpg"><img src="assets/img/gallery/gallery-3.jpg" className="img-fluid" alt /></a></div>
          <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-4.jpg"><img src="assets/img/gallery/gallery-4.jpg" className="img-fluid" alt /></a></div>
          <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-5.jpg"><img src="assets/img/gallery/gallery-5.jpg" className="img-fluid" alt /></a></div>
          <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-6.jpg"><img src="assets/img/gallery/gallery-6.jpg" className="img-fluid" alt /></a></div>
          <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-7.jpg"><img src="assets/img/gallery/gallery-7.jpg" className="img-fluid" alt /></a></div>
          <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-8.jpg"><img src="assets/img/gallery/gallery-8.jpg" className="img-fluid" alt /></a></div>
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>{/* /Gallery Section */}
  {/* Contact Section */}

 <section id='promociones' className='promociones section light-baground'>

 <div className="container section-title" data-aos="fade-up">
 <h2>Promociones</h2>
 <p><span>Promociones</span> <span className="description-title">De hoy</span></p>
 </div>
 </section>

  <section id="contact" className="contact section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Contact</h2>
      <p><span>Need Help?</span> <span className="description-title">Contact Us</span></p>
    </div>{/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="mb-5">
        <iframe style={{width: '100%', height: 400}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
      </div>{/* End Google Maps */}
      <div className="row gy-4">
        <div className="col-md-6">
          <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay={200}>
            <i className="icon bi bi-geo-alt flex-shrink-0" />
            <div>
              <h3>Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
        </div>{/* End Info Item */}
        <div className="col-md-6">
          <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay={300}>
            <i className="icon bi bi-telephone flex-shrink-0" />
            <div>
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
        </div>{/* End Info Item */}
        <div className="col-md-6">
          <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay={400}>
            <i className="icon bi bi-envelope flex-shrink-0" />
            <div>
              <h3>Email Us</h3>
              <p>info@example.com</p>
            </div>
          </div>
        </div>{/* End Info Item */}
        <div className="col-md-6">
          <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay={500}>
            <i className="icon bi bi-clock flex-shrink-0" />
            <div>
              <h3>Opening Hours<br /></h3>
              <p><strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed</p>
            </div>
          </div>
        </div>{/* End Info Item */}
      </div>
      <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay={600}>
        <div className="row gy-4">
          <div className="col-md-6">
            <input type="text" name="name" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-6 ">
            <input type="email" className="form-control" name="email" placeholder="Your Email" required />
          </div>
          <div className="col-md-12">
            <input type="text" className="form-control" name="subject" placeholder="Subject" required />
          </div>
          <div className="col-md-12">
            <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
          </div>
          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your message has been sent. Thank you!</div>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>{/* End Contact Form */}
    </div>
  </section>{/* /Contact Section */}
</main>


  )
}

export default Inicio
import React from 'react';

function Home() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Gym Factory</title>

        {/* Favicon */}
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />

        {/* Custom CSS */}
        <link rel="stylesheet" href="./assets/css/style.css" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@600;700;800;900&family=Rubik:wght@400;500;800&display=swap"
          rel="stylesheet"
        />

        {/* Preload Images */}
        <link rel="preload" as="image" href="./assets/images/hero-banner.png" />
        <link rel="preload" as="image" href="./assets/images/hero-circle-one.png" />
        <link rel="preload" as="image" href="./assets/images/hero-circle-two.png" />
        <link rel="preload" as="image" href="./assets/images/heart-rate.svg" />
        <link rel="preload" as="image" href="./assets/images/calories.svg" />
      </head>

      <body id="top">
        {/* Header */}
        <header className="header" data-header>
          <div className="container">
            <a href="#" className="logo">
              <ion-icon name="barbell-sharp" aria-hidden="true"></ion-icon>
              <span className="span">The Gym Factory</span>
            </a>
            {/* Navigation */}
            <nav className="navbar" data-navbar>
              <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                <ion-icon name="close-sharp" aria-hidden="true"></ion-icon>
              </button>
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link active" data-nav-link>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#class" className="navbar-link" data-nav-link>
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <a href="/register" className="btn btn-secondary">
              Join Now
            </a>
            <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <article>
            {/* Hero Section */}
            <section
              className="section hero bg-dark has-after has-bg-image"
              id="home"
              aria-label="hero"
              data-section
              style={{
                backgroundImage: "url('./assets/images/hero-bg.png')",
              }}
            >
              <div className="container">
                <div className="hero-content">
                  <p className="hero-subtitle">
                    <strong className="strong">The Best</strong>Fitness Club
                  </p>
                  <h1 className="h1 hero-title">Work Hard To Get Better Life</h1>
                  <p className="section-text">
                    Welcome to The Gym Factory, where your fitness journey begins and your goals
                    become a reality.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Get Started
                  </a>
                </div>
                <div className="hero-banner">
                  <img
                    src="./assets/images/hero-banner.png"
                    width="660"
                    height="753"
                    alt="hero banner"
                    className="w-100"
                  />
                  <img
                    src="./assets/images/hero-circle-one.png"
                    width="666"
                    height="666"
                    aria-hidden="true"
                    alt=""
                    className="circle circle-1"
                  />
                  <img
                    src="./assets/images/hero-circle-two.png"
                    width="666"
                    height="666"
                    aria-hidden="true"
                    alt=""
                    className="circle circle-2"
                  />
                  <img
                    src="./assets/images/heart-rate.svg"
                    width="255"
                    height="270"
                    alt="heart rate"
                    className="abs-img abs-img-1"
                  />
                  <img
                    src="./assets/images/calories.svg"
                    width="348"
                    height="224"
                    alt="calories"
                    className="abs-img abs-img-2"
                  />
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="section about" id="about" aria-label="about">
              <div className="container">
                <div className="about-banner has-after">
                  <img
                    src="./assets/images/about-banner.png"
                    width="660"
                    height="648"
                    loading="lazy"
                    alt="about banner"
                    className="w-100"
                  />
                  <img
                    src="./assets/images/about-circle-one.png"
                    width="660"
                    height="534"
                    loading="lazy"
                    aria-hidden="true"
                    alt=""
                    className="circle circle-1"
                  />
                  <img
                    src="./assets/images/about-circle-two.png"
                    width="660"
                    height="534"
                    loading="lazy"
                    aria-hidden="true"
                    alt=""
                    className="circle circle-2"
                  />
                  <img
                    src="./assets/images/fitness.png"
                    width="650"
                    height="154"
                    loading="lazy"
                    alt="fitness"
                    className="abs-img w-100"
                  />
                </div>
                <div className="about-content">
                  <p className="section-subtitle">About Us</p>
                  <h2 className="h2 section-title">Welcome To Our Fitness Gym</h2>
                  <p className="section-text">
                    At The Gym Factory, we're more than just a fitness studio; we're a community
                    of individuals committed to transforming lives through health and wellness.
                    With state-of-the-art facilities, experienced trainers, and a diverse range of
                    classes and programs, we empower our members to achieve their fitness goals
                    and lead healthier, happier lives. Whether you're a seasoned athlete or new
                    to fitness, we provide the support, motivation, and expertise you need to
                    succeed. Join us at The Gym Factory and be a part of something extraordinary
                    – a place where fitness is not just a destination, but a lifelong journey.
                  </p>
                  <div className="wrapper">
                    <div className="about-coach">
                      <figure className="coach-avatar">
                        <img
                          src="./assets/images/about-coach.jpg"
                          width="65"
                          height="65"
                          loading="lazy"
                          alt="Trainer"
                        />
                      </figure>
                      <div>
                        <h3 className="h3 coach-name">Denis Daniels</h3>
                        <p className="coach-title">Our Coach</p>
                      </div>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Video Section */}
            <section className="section video" aria-label="video">
              <div className="container">
                <div
                  className="video-card has-before has-bg-image"
                  style={{
                    backgroundImage: "url('./assets/images/video-banner.jpg')",
                  }}
                >
                  <h2 className="h2 card-title">Explore Fitness Life</h2>
                  <button className="play-btn" aria-label="play video">
                    <ion-icon name="play-sharp" aria-hidden="true"></ion-icon>
                  </button>
                  <a href="#" className="btn-link has-before">
                    Watch More
                  </a>
                </div>
              </div>
            </section>

            {/* Class Section */}
            <section
              className="section class bg-dark has-bg-image"
              id="class"
              aria-label="class"
              style={{
                backgroundImage: "url('./assets/images/classes-bg.png')",
              }}
            >
              <div className="container">
                <p className="section-subtitle">Our Classes</p>
                <h2 className="h2 section-title text-center">Fitness Classes For Every Goal</h2>
                <ul className="class-list has-scrollbar">
                  {/* Class Card 1 */}
                  <li className="scrollbar-item">
                    <div className="class-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ "--width": 416, "--height": 240 }}
                      >
                        <img
                          src="./assets/images/class-1.jpg"
                          width="416"
                          height="240"
                          loading="lazy"
                          alt="Weight Lifting"
                          className="img-cover"
                        />
                      </figure>
                      <div className="card-content">
                        <div className="title-wrapper">
                          <img
                            src="./assets/images/class-icon-1.png"
                            width="52"
                            height="52"
                            aria-hidden="true"
                            alt=""
                            className="title-icon"
                          />
                          <h3 className="h3">
                            <a href="#" className="card-title">
                              Weight Lifting
                            </a>
                          </h3>
                        </div>
                        <p className="card-text">
                          Whether you're a seasoned lifter or new to this exhilarating
                          discipline, our dedicated trainers and state-of-the-art equipment
                          are here to help you reach new heights and sculpt the physique you
                          desire.
                        </p>
                        <div className="card-progress">
                          <div className="progress-wrapper">
                            <p className="progress-label">Class Full</p>
                            <span className="progress-value">85%</span>
                          </div>
                          <div className="progress-bg">
                            <div className="progress-bar" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Class Card 2 */}
                  <li className="scrollbar-item">
                    <div className="class-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ "--width": 416, "--height": 240 }}
                      >
                        <img
                          src="./assets/images/class-2.jpg"
                          width="416"
                          height="240"
                          loading="lazy"
                          alt="Cardio & Strenght"
                          className="img-cover"
                        />
                      </figure>
                      <div className="card-content">
                        <div className="title-wrapper">
                          <img
                            src="./assets/images/class-icon-2.png"
                            width="52"
                            height="52"
                            aria-hidden="true"
                            alt=""
                            className="title-icon"
                          />
                          <h3 className="h3">
                            <a href="#" className="card-title">
                              Cardio & Strength
                            </a>
                          </h3>
                        </div>
                        <p className="card-text">
                          Our cardio strength programs combine the heart-pumping intensity
                          of cardiovascular workouts with targeted strength training exercises
                          to deliver a comprehensive fitness.
                        </p>
                        <div className="card-progress">
                          <div className="progress-wrapper">
                            <p className="progress-label">Class Full</p>
                            <span className="progress-value">70%</span>
                          </div>
                          <div className="progress-bg">
                            <div className="progress-bar" style={{ width: "70%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Class Card 3 */}
                  <li className="scrollbar-item">
                    <div className="class-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ "--width": 416, "--height": 240 }}
                      >
                        <img
                          src="./assets/images/class-3.jpg"
                          width="416"
                          height="240"
                          loading="lazy"
                          alt="Power Yoga"
                          className="img-cover"
                        />
                      </figure>
                      <div className="card-content">
                        <div className="title-wrapper">
                          <img
                            src="./assets/images/class-icon-3.png"
                            width="52"
                            height="52"
                            aria-hidden="true"
                            alt=""
                            className="title-icon"
                          />
                          <h3 className="h3">
                            <a href="#" className="card-title">
                              Power Yoga
                            </a>
                          </h3>
                        </div>
                        <p className="card-text">
                          Our Power Yoga classes are designed to challenge your limits, build
                          lean muscle, and enhance flexibility while fostering a deep sense of
                          mindfulness.
                        </p>
                        <div className="card-progress">
                          <div className="progress-wrapper">
                            <p className="progress-label">Class Full</p>
                            <span className="progress-value">90%</span>
                          </div>
                          <div className="progress-bg">
                            <div className="progress-bar" style={{ width: "90%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Class Card 4 */}
                  <li className="scrollbar-item">
                    <div className="class-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ "--width": 416, "--height": 240 }}
                      >
                        <img
                          src="./assets/images/class-4.jpg"
                          width="416"
                          height="240"
                          loading="lazy"
                          alt="The Fitness Pack"
                          className="img-cover"
                        />
                      </figure>
                      <div className="card-content">
                        <div className="title-wrapper">
                          <img
                            src="./assets/images/class-icon-4.png"
                            width="52"
                            height="52"
                            aria-hidden="true"
                            alt=""
                            className="title-icon"
                          />
                          <h3 className="h3">
                            <a href="#" className="card-title">
                              The Fitness Pack
                            </a>
                          </h3>
                        </div>
                        <p className="card-text">
                          Our Fitness Packs provide the structure and guidance you need to
                          achieve success. Discover the perfect fitness solution for you and
                          embark on a transformative journey with us today.
                        </p>
                        <div className="card-progress">
                          <div className="progress-wrapper">
                            <p className="progress-label">Class Full</p>
                            <span className="progress-value">60%</span>
                          </div>
                          <div className="progress-bg">
                            <div className="progress-bar" style={{ width: "60%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Blog Section */}
            <section className="section blog" id="blog" aria-label="blog">
              <div className="container">
                <p className="section-subtitle">Our News</p>
                <h2 className="h2 section-title text-center">Latest Blog Feed</h2>
                <ul className="blog-list has-scrollbar">
                  {/* Blog Card 1 */}
                  <li className="scrollbar-item">
                    <div className="blog-card">
                      <div
                        className="card-banner img-holder"
                        style={{ "--width": 440, "--height": 270 }}
                      >
                        <img
                          src="./assets/images/blog-1.jpg"
                          width="440"
                          height="270"
                          loading="lazy"
                          alt="Going to the gym for the first time"
                          className="img-cover"
                        />
                        <time className="card-meta" datetime="2022-07-07">
                          7 July 2023
                        </time>
                      </div>
                      <div className="card-content">
                        <h3 className="h3">
                          <a href="#" className="card-title">
                            Going to the gym for the first time
                          </a>
                        </h3>
                        <p className="card-text">
                          Explore the essential tips and insights you need as a newcomer
                          to the gym in our blog, as we guide you through the exciting and
                          empowering experience of stepping into a fitness studio for the
                          first time.
                        </p>
                        <a href="#" className="btn-link has-before">
                          Read More
                        </a>
                      </div>
                    </div>
                  </li>
                  {/* Blog Card 2 */}
                  <li className="scrollbar-item">
                    <div className="blog-card">
                      <div
                        className="card-banner img-holder"
                        style={{ "--width": 440, "--height": 270 }}
                      >
                        <img
                          src="./assets/images/blog-2.jpg"
                          width="440"
                          height="270"
                          loading="lazy"
                          alt="Parturient accumsan cacus pulvinar magna"
                          className="img-cover"
                        />
                        <time className="card-meta" datetime="2022-07-07">
                          7 July 2023
                        </time>
                      </div>
                      <div className="card-content">
                        <h3 className="h3">
                          <a href="#" className="card-title">
                            Start your day with a physical activity
                          </a>
                        </h3>
                        <p className="card-text">
                          Energize your mornings and boost your well-being by incorporating
                          a daily dose of physical activity into your routine – discover
                          the benefits of starting your day with fitness.
                        </p>
                        <a href="#" className="btn-link has-before">
                          Read More
                        </a>
                      </div>
                    </div>
                  </li>
                  {/* Blog Card 3 */}
                  <li className="scrollbar-item">
                    <div className="blog-card">
                      <div
                        className="card-banner img-holder"
                        style={{ "--width": 440, "--height": 270 }}
                      >
                        <img
                          src="./assets/images/blog-3.jpg"
                          width="440"
                          height="270"
                          loading="lazy"
                          alt="Risus purus namien parturient accumsan cacus"
                          className="img-cover"
                        />
                        <time className="card-meta" datetime="2022-07-07">
                          7 July 2023
                        </time>
                      </div>
                      <div className="card-content">
                        <h3 className="h3">
                          <a href="#" className="card-title">
                            Healthy Eating Hacks: Fueling Your Fitness Journey
                          </a>
                        </h3>
                        <p className="card-text">
                          Explore our blog for essential healthy eating hacks that will
                          fuel your fitness journey and help you achieve your wellness
                          goals at The Gym Factory.
                        </p>
                        <a href="#" className="btn-link has-before">
                          Read More
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div
            className="section footer-top bg-dark has-bg-image"
            style={{
              backgroundImage: "url('./assets/images/footer-bg.png')",
            }}
          >
            <div className="container">
              <div className="footer-brand">
                <a href="#" className="logo">
                  <ion-icon name="barbell-sharp" aria-hidden="true"></ion-icon>
                  <span className="span">The Gym Factory</span>
                </a>
                <p className="footer-brand-text">
                  Welcome to The Gym Factory, where your fitness journey begins and
                  your goals become a reality
                </p>
                <div className="wrapper">
                  <img
                    src="./assets/images/footer-clock.png"
                    width="34"
                    height="34"
                    loading="lazy"
                    alt="Clock"
                  />
                  <ul className="footer-brand-list">
                    <li>
                      <p className="footer-brand-title">Monday - Friday</p>
                      <p>7:00Am - 10:00Pm</p>
                    </li>
                    <li>
                      <p className="footer-brand-title">Saturday - Sunday</p>
                      <p>7:00Am - 2:00Pm</p>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title has-before">Our Links</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title has-before">Services</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Weight Lifting
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Cardio & Strength
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Power Yoga
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Fitness Pack
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title has-before">Contact Info</p>
                </li>
                <li>
                  <a href="mailto:info@gymfactory.com" className="footer-link">
                    info@gymfactory.com
                  </a>
                </li>
                <li>
                  <a href="tel:+123456789" className="footer-link">
                    +123 456 789
                  </a>
                </li>
                <li>
                  <p className="footer-link">
                    123 Fitness Street,
                    <br />
                    Fitness Town, USA
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="section footer-bottom">
            <div className="container">
              <p className="footer-text">
                &copy; {new Date().getFullYear()} The Gym Factory. All rights reserved.
              </p>
              <ul className="footer-social-list">
                <li>
                  <a href="#" className="footer-social-link">
                    <ion-icon name="logo-facebook" aria-hidden="true"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-social-link">
                    <ion-icon name="logo-twitter" aria-hidden="true"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-social-link">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-social-link">
                    <ion-icon name="logo-youtube" aria-hidden="true"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        {/* JavaScript */}
        <script src="./assets/js/main.js"></script>
      </body>
    </html>
  );
}

export default Home;

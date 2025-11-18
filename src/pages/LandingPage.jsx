import "./landing.css"; 
import Partner from "../components/Partner";
import Hero from "../components/Hero";
import BusinessGrid from "../components/BusinessGrid";
import Header from "../components/Header";

import techInnovationImage from "../assets/tech-innovation.jpg";
import logoImage from "../assets/logo.jpg";

export default function LandingPage() {
  return (
    <div className="landing-page">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* CITIES SECTION */}
      <section className="cities-strip">
        <h3>Serving major cities across India</h3>

        <div className="cities-list">
          <a>Kolkata, West Bengal</a>
          <a>New Delhi, NCR</a>
          <a>Mumbai, Maharashtra</a>
          <a>Chennai, Tamil Nadu</a>
          <a>Bengaluru, Karnataka</a>
          <a>Lucknow, UP</a>
        </div>
      </section>

      {/* OUR BUSINESS SECTION */}
      <section className="business-section">

        <div className="business-line long"></div>
        <div className="business-line short"></div>

        <div className="business-bubbles-right">
          <div className="bubble-big"></div>
          <div className="bubble-small"></div>
        </div>

        <div className="business-title-wrapper">
          <span className="business-title-o">O</span>
          <h2 className="business-title-text">UR BUSINESSES</h2>
        </div>

        <div className="business-center-line"></div>

        <p className="business-text">
          H & P Projects is a complete solutions partner, delivering precision,
          efficiency, and consistency across the entire project lifecycle—from
          planning to execution. With expertise in civil, mechanical, electrical,
          IT, and manpower solutions, we provide integrated, turnkey support
          tailored to client needs. Our strong supply chain, in-house quality
          control, and agile processes ensure timely delivery, standards
          compliance, and adaptability to evolving requirements. We handle
          complex, large-scale projects with ease, combining technical expertise
          and client-focused assurance to inspire trust. Committed to excellence
          and long-term progress, H & P Projects offers reliable, full-service
          solutions that drive sustainable success for every client.
        </p>

        <BusinessGrid />
      </section>

      {/* TECHNOLOGY & INNOVATION SECTION */}
      <section className="tech-innovation-section">

        {/* LEFT DECORATIVE BUBBLES */}
        <div className="tech-bubble-big-left"></div>
        <div className="tech-bubble-small-left"></div>

        {/* RIGHT-SIDE LINES */}
        <div className="tech-line long"></div>
        <div className="tech-line short"></div>

        <div className="tech-innovation-main-content">

          {/* LEFT CONTENT */}
          <div className="tech-innovation-content">
            <h2 className="tech-heading">
              <span className="tech-big-t">T</span>ECHNOLOGY AND <br />
              INNOVATION
            </h2>

            <p className="tech-innovation-description">
              At H & P Projects, technology is not just about machines and
              systems—it is about creating smarter, safer, and more sustainable
              ways of working. We believe innovation should solve real problems,
              open new opportunities, and empower industries, businesses, and
              communities to grow. From AI-driven project planning to efficient
              electrical networks and digital construction management, we embed
              technology into every step of our projects.
            </p>
          </div>

          {/* IMAGE + BUBBLES BEHIND IMAGE */}
          <div className="tech-innovation-image-container">
            <div className="img-bubble-big"></div>
            <div className="img-bubble-small"></div>

            <img
              src={techInnovationImage}
              alt="Tech"
              className="tech-innovation-image"
            />
          </div>

        </div>
      </section>

      {/* PARTNER SECTION */}
      <Partner />

      {/* SUPPLY CAPABILITY + FOOTER */}
      <section className="supply-capability-section">

        <div className="supply-capability-content">

          <div className="supply-title-container">
            <h2 className="supply-title-graphic-f">F</h2>
            <h2 className="supply-title-text">ULL SERVICE SUPPLY CAPABILITY</h2>
          </div>

          <div className="supply-line long"></div>
          <div className="supply-line short"></div>

          <p className="supply-description">
            At H & P Projects, we are more than just a service provider—we are a
            complete solutions partner. Our approach ensures that every stage of
            the project lifecycle, from planning to execution, is delivered with
            precision, efficiency, and consistency. We bring together expertise
            across civil, mechanical, electrical, IT, and manpower solutions,
            creating a strong foundation for multi-sector support.
            <br /><br />
            By combining technical know-how with client-focused assurance, we
            consistently deliver outcomes that inspire trust. With H & P Projects,
            clients can rely on a partner committed to full-service excellence and
            long-term progress.
          </p>

          <div className="supply-bottom-lines">
            <div className="supply-bottom-line"></div>
            <div className="supply-bottom-line"></div>
          </div>
        </div>

        <div className="footer-section">

          <div className="footer-left">
            <div className="footer-logo-wrapper">
              <img src={logoImage} className="footer-logo" />
              <h2 className="footer-company-name">H&P Projects</h2>
            </div>

            <p className="footer-subtext">
              Ready to transform your vision into reality?
              Our team is prepared to guide you through every step.
            </p>

            <div className="footer-icons">
              <img src="/src/assets/facebook.png" />
              <img src="/src/assets/instagram.png" />
              <img src="/src/assets/xhandle.png" />
              <img src="/src/assets/linkedin.png" />
              <img src="/src/assets/youtube.png" />
            </div>
          </div>

          <div className="footer-contact-column">
            <div className="footer-contact-title">Email</div>
            <div className="footer-contact-data">info@hpprojects.com.au</div>

            <div className="footer-contact-title">Phone</div>
            <div className="footer-contact-data">+61 2 9000 0000</div>
          </div>

          <div className="footer-contact-column">
            <div className="footer-contact-title">Office</div>
            <div className="footer-contact-data">
              Level 5, 100 Miller Street, North Sydney NSW 2060
            </div>
          </div>

          <div className="footer-divider-line"></div>

          <div className="footer-bottom">
            © 2024 H&P Projects. All rights reserved.
            <span>Privacy policy</span> |
            <span>Terms of service</span> |
            <span>Cookies settings</span>
          </div>

        </div>
      </section>
    </div>
  );
}

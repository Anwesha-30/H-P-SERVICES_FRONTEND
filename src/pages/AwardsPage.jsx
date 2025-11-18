import React from "react";
import "./AwardsPage.css";
import Header from "../components/Header";

// Award Images
//import award1 from "../assets/1.jpg";

import award2 from "../assets/2.jpg";
import award3 from "../assets/3.jpg";
import award4 from "../assets/4.jpg";
import award5 from "../assets/5.jpg";

// Certificates image
import certificatesImg from "../assets/certificates.png";

// Footer assets
import logo from "../assets/logo.jpg";
import f1 from "../assets/footer1.png";
import f2 from "../assets/footer2.png";
import f3 from "../assets/footer3.png";
import f4 from "../assets/footer4.png";
import f5 from "../assets/footer5.png";

import mailIcon from "../assets/mail.png";
import callIcon from "../assets/call.png";
import locationIcon from "../assets/location.png";

export default function AwardsPage() {
  const awards = [
    {
      title: "Excellence in Project Execution Award",
      img: award1,
      desc: "Recognized nationally for delivering complex turnkey and industrial projects with precision and efficiency.",
    },
    {
      title: "Innovation & Green Building Award",
      img: award2,
      desc: "Honored for integrating sustainable, smart, and innovative green solutions.",
    },
    {
      title: "Safety & Compliance Leadership Award",
      img: award3,
      desc: "Recognized for excellence in safety, regulatory compliance, and operational leadership.",
    },
    {
      title: "Community & Rural Upliftment Recognition",
      img: award4,
      desc: "Awarded for community development, local upliftment, and rural impact initiatives.",
    },
    {
      title: "Quality & Standards Distinction",
      img: award5,
      desc: "Honored for superior quality, process excellence, and standardised operations.",
    },
  ];

  return (
    <>
      <div className="awards-wrapper">
        <Header />

        {/* HERO SECTION */}
        <section className="hp-hero">
          <div className="awards-title-container">
            <h2 className="awards-big-a">A</h2>
            <h2 className="awards-text">WARDS</h2>
          </div>

          <div className="awards-line line-1"></div>
          <div className="awards-line line-2"></div>

          <p className="hp-desc">
            H & P Projects is proud to have earned recognition for excellence,
            innovation, and impact across its services.
          </p>
        </section>

        {/* GRID */}
        <section className="awards-grid-section">
          <div className="awards-grid">
            {awards.map((a, i) => (
              <div key={i} className="award-card">
                <div className="award-content">
                  <p className="award-title">{a.title}</p>
                  <p className="award-desc">{a.desc}</p>
                </div>

                <img src={a.img} alt="" className="award-img" />
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATES SECTION */}
        <section className="cert-section">
          <div className="cert-bubble-big"></div>
          <div className="cert-bubble-small"></div>

          <div className="cert-lines-container">
            <div className="cert-line cert-line-small"></div>
            <div className="cert-line cert-line-big"></div>
          </div>

          <div className="cert-title-wrapper">
            <h1 className="cert-title-c">C</h1>
            <h1 className="cert-title-rest">ERTIFICATES</h1>
          </div>

          <p className="cert-desc">
            H & P Projects is proud to have earned recognition for excellence,
            innovation, and impact across its services. Our commitment to
            quality, safety, sustainability, and service has been acknowledged
            through multiple certifications.
          </p>

          <div className="cert-image-wrapper">
            <img src={certificatesImg} alt="Certificates" className="cert-big-img" />
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <div className="footer-section">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo-row">
              <img src={logo} alt="logo" className="footer-logo" />
              <h2 className="footer-title">H&P Projects</h2>
            </div>

            <p className="footer-desc">
              Ready to transform your vision into reality? Our team is prepared to guide you through every step.
            </p>

            <div className="footer-social">
              <img src={f1} alt="fb" />
              <img src={f2} alt="ig" />
              <img src={f3} alt="x" />
              <img src={f4} alt="linkedin" />
              <img src={f5} alt="youtube" />
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-right">
            <div className="contact-item">
              <img src={mailIcon} alt="mail" className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:info@hpprojects.com.au">info@hpprojects.com.au</a>
              </div>
            </div>

            <div className="contact-item">
              <img src={callIcon} alt="call" className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+51239009000">+51 2 3900 9000</a>
              </div>
            </div>

            <div className="contact-item">
              <img src={locationIcon} alt="location" className="contact-icon" />
              <div>
                <h4>Office</h4>
                <p>Level 5, 100 Miller Street, North Sydney NSW 2060</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p>© 2024 H&P Projects. All rights reserved.</p>

          <div className="footer-links">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Cookies settings</a>
          </div>
        </div>
      </div>
    </>
  );
}

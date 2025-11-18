import React, { useState } from "react";
import "./AboutPage.css";

import Header from "../components/Header";

import maskImage from "../assets/Mask.jpg";
import logo from "../assets/logo.jpg";

// Social icons
import f1 from "../assets/footer1.png";
import f2 from "../assets/footer2.png";
import f3 from "../assets/footer3.png";
import f4 from "../assets/footer4.png";
import f5 from "../assets/footer5.png";

// Contact icons
import mailIcon from "../assets/mail.png";
import callIcon from "../assets/call.png";
import locationIcon from "../assets/location.png";

export default function About() {
  const cards = [
    {
      id: 1,
      title: "Our Facility",
      para: "State-of-the-art infrastructure equipped to deliver integrated civil, mechanical, electrical, IT, and manpower solutions across India."
    },
    {
      id: 2,
      title: "Full-Service Supplier",
      para: "One partner, many solutions — engineering, IT, manpower, and business support services, all tailored for client success."
    },
    {
      id: 3,
      title: "The Largest Repository",
      para: "A strong pool of skilled, semi-skilled, and unskilled manpower, backed by on-site training and compliance, ready for diverse industries."
    },

    // ⭐ CARD 4 — HOVER CARD (Committed → Green Works)
    {
      id: 4,
      title: "Committed to Community",
      para: "Committed to eco-friendly practices, sustainable construction, and clean technologies, we build with responsibility towards the environment."
    },

    {
      id: 5,
      title: "Our R & D Facility",
      para: "A dedicated Research & Development wing focused on innovation, smart technologies, and sustainable solutions, driving continuous improvement in every project."
    },
    {
      id: 6,
      title: "Diversified Business",
      para: "From turnkey construction and industrial works to electrical systems, IT solutions, and workforce services, we cater to multiple sectors under one roof."
    },
    {
      id: 7,
      title: "Trusted Excellence",
      para: "Built on expertise, innovation, and reliability, our projects stand as proof of safe, sustainable, and timely delivery."
    },
    {
      id: 8,
      title: "Revitalizing Rural India",
      para: "Through employment, training, and infrastructure development, we actively contribute to rural upliftment and inclusive growth."
    },
    {
      id: 9,
      title: "Industry Pioneer",
      para: "Pushing boundaries with cutting-edge technologies and integrated approaches, we set benchmarks for modern engineering and business solutions."
    },
    {
      id: 10,
      title: "The Exporter",
      para: "Expanding our footprint with export-ready services and solutions, we aim to represent Indian excellence on a global stage."
    },

    // ⭐ CARD 11 — NO HOVER, CSR TEXT
    {
      id: 11,
      title: "Committed to Community",
      para: "Our business goes beyond profits—CSR initiatives, skill development, and social programs reflect our dedication to people and progress."
    },

    {
      id: 12,
      title: "Global Leader",
      para: "With a vision to compete internationally, we combine global standards with local expertise to create impactful solutions."
    }
  ];

  return (
    <>
      <Header />

      <div className="about-wrapper">
        <div className="about-hero">
          <img src={maskImage} alt="hero" className="about-hero-img" />
        </div>

        {/* TITLE + BUBBLES */}
        <div className="about-heading-row">
          <div className="about-title">
            <span className="about-title-big">A</span>
            <span className="about-title-small">BOUT US</span>
          </div>

          <div className="about-bubbles">
            <div className="bubble-large"></div>
            <div className="bubble-small"></div>
          </div>
        </div>

        {/* LINES */}
        <div className="about-lines-figma">
          <div className="figma-line-upper"></div>
          <div className="figma-line-lower"></div>
        </div>

        {/* GRID */}
        <div className="about-grid">
          {cards.map((c) => (
            <Card key={c.id} id={c.id} title={c.title} para={c.para} />
          ))}
        </div>
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

/* UPDATED CARD COMPONENT */
function Card({ id, title, para }) {
  const [hover, setHover] = useState(false);

  // ⭐ Only card with ID = 4 changes to "Green Works" on hover
  const finalTitle = id === 4 && hover ? "Green Works" : title;

  // ⭐ Paragraph never changes
  const finalPara = para;

  return (
    <div
      className={`about-card ${hover ? "hovered" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 className="card-title">{finalTitle}</h3>
      <p className="card-para">{finalPara}</p>
    </div>
  );
}

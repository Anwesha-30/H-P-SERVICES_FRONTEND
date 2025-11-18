import "./Partner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import koushik1 from "../assets/koushik1.jpg";
import koushik2 from "../assets/koushik2.jpg";

export default function Partner() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="partner-section">

      {/* --- LEFT SIDE TWO LINES --- */}
      <div className="partner-line left-long"></div>
      <div className="partner-line left-short"></div>

      {/* --- RIGHT SIDE TWO LINES --- */}
      <div className="partner-line right-long"></div>
      <div className="partner-line right-short"></div>

      {/* --- BUBBLES (Figma accurate) --- */}
      <div className="partner-bubble bubble-left"></div>
      <div className="partner-bubble bubble-right-lg"></div>
      <div className="partner-bubble bubble-right-sm"></div>

      {/* --- Figma-accurate heading with big P --- */}
      <h2 className="partner-title" data-aos="fade-up">
        <span className="partner-title-big-p">P</span>
        <span className="partner-title-rest">ARTNERS PROFILE</span>
      </h2>

      <div className="partner-card-container">

        {/* Card 1 */}
        <div
          className="partner-card"
          data-aos="fade-up"
          onClick={() => alert("Clicked Partner 1")}
        >
          <img src={koushik1} alt="Partner 1" />
          <div className="partner-card-name">KOUSHIK PAUL</div>
        </div>

        {/* Card 2 */}
        <div
          className="partner-card"
          data-aos="fade-up"
          data-aos-delay="150"
          onClick={() => alert("Clicked Partner 2")}
        >
          <img src={koushik2} alt="Partner 2" />
          <div className="partner-card-name">KOUSHIK PAUL</div>
        </div>

      </div>
    </section>
  );
}

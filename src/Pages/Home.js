import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import head1 from '../Assets/Images/head1.jpg'
import head2 from '../Assets/Images/head2.jpg'
import head3 from '../Assets/Images/head3.jpg'
import makhachkalaBuilding from '../Assets/Images/Makhalakaimages/makhachkalaBuilding.png'
import mainslider1 from '../Assets/Images/Makhalakaimages/mainslider1.jpeg'
import mainslider2 from '../Assets/Images/Makhalakaimages/mainslider2.jpeg'
import mainslider3 from '../Assets/Images/Makhalakaimages/mainslider3.jpeg'
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Home() {
  const sliderImages = [mainslider1, mainslider2, mainslider3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const calculateTimeLeft = () => {
    const target = new Date("September 17, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) return {};

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 1000);

    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero" style={{
        backgroundImage: `url(${makhachkalaBuilding})`
      }}>
        <div className="hero-overlay">
          <div className="hero-location">Makhachkala, Dagestan, Russia</div>
          <div className="hero-content">

            {/* COUNTDOWN */}
            <div className="countdown">
              <div className="time-box">
                <h2 className="days">{timeLeft.days || "0"}</h2>
                <p>Days</p>
              </div>
              <div className="time-box">
                <h2 className="hours">{timeLeft.hours || "0"}</h2>
                <p>Hour</p>
              </div>
              <div className="time-box">
                <h2 className="minutes">{timeLeft.minutes || "0"}</h2>
                <p>Minute</p>
              </div>
              <div className="time-box">
                <h2 className="seconds">{timeLeft.seconds || "0"}</h2>
                <p>Second</p>
              </div>
            </div>

            {/* LOGOS */}
            <div className="hero-logos">
              <div className="logo1"> <img src={head1} alt="" /></div>
              <div className="logo3"><img src={head3} alt="" /></div>
              <div className="logo2"> <img src={head2} alt="" /></div>
            </div>

            <h1>29TH WORLD CONGRESS ON CLINICAL NUTRITION</h1>

            <p className="hero-text">
              17th - 19th September 2026 <br />
              367000, SRC «Juravli», 9 Entuziastov Street, Karaman 2, Makhachkala, Dagestan, Russia
            </p>

            <button className="primary-btn">ONLINE REGISTRATION</button>
          </div>
        </div>
      </section>
      {/* ---------------------------  main slider----------------- */}
      <section className="mainslider">
        <div className="slidersection">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000, // ✅ 5 seconds
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true} // ✅ arrows
          >
            <SwiperSlide> <img src={mainslider1} alt="" /> </SwiperSlide>
            <SwiperSlide> <img src={mainslider2} alt="" /> </SwiperSlide>
            <SwiperSlide> <img src={mainslider3} alt="" /> </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* ---------------------------  main slider----------------- */}
      <section>

      </section>

      {/* INFO */}
      <section className="info">
        <p>
          Joining Physiological health dynamics, functional food industry,
          nutraceuticals and health promotion, for disease prevention.
        </p>

        <div className="info-btns">
          <button>WWW.WCCN2026.COM</button>
          <button>WWW.INCHEALTHFOODS.COM</button>
        </div>
      </section>

      {/* TOPICS */}
      <section className="topics">
        <h2>Main tentative topics of the WCCN Scientific programme:</h2>

        <div className="topics-grid">
          {[
            "Physiology, anatomy and biochemistry of nutrition",
            "Effect of feeding animals",
            "Circadian food energy metabolism",
            "Processed functional foods",
            "Holistic approaches to nutrition",
            "Food security for world health",
            "Research in agriculture",
            "Healthy food processing",
            "Cutting edge medical nutrition",
            "Micronutrient deficiency",
            "Pharmaconutrition",
            "Enteral and parenteral nutrition",
            "Probiotics",
            "Experimental nutrition",
            "Food safety"
          ].map((item, i) => (
            <div key={i} className="topic-card">{item}</div>
          ))}
        </div>
      </section>

      {/* SIGHTSEEING */}
      <section className="sightseeing">
        <div className="overlay">
          <h2>Sightseeing</h2>
          <p>
            Sightseeing is one of the most enjoyable activities during travel.
          </p>

          <div className="gallery">
            <img src="https://via.placeholder.com/300x200" alt="" />
            <img src="https://via.placeholder.com/300x200" alt="" />
            <img src="https://via.placeholder.com/300x200" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
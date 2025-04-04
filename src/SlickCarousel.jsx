import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";

const SlickCarousel = () => {
  const [people, setPeople] = useState(longList);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="slick-container">
      <Slider {...settings}>
        {people.map((item, index) => {
          return (
            <article key={item.id}>
              <img src={item.image} className="person-img" alt={item.name} />
              <h5 className="name">{item.name}</h5>
              <p className="title">{item.title}</p>
              <p className="text">{item.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;

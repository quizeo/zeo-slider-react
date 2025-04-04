import React, { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiChevronsRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);
  //   const [longList, setLongList] = useState(longpeople);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      let newPerson = oldPerson - 1;
      if (newPerson < 0) {
        newPerson = people.length - 1;
      }
      return newPerson;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      let newPerson = oldPerson + 1;
      if (newPerson > people.length - 1) {
        newPerson = 0;
      }
      return newPerson;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((item, index) => {
        return (
          <article
            key={item.id}
            className="slide"
            style={{
              transform: `translateX(${100 * (index - currentPerson)}%)`,
              opacity: index === currentPerson ? "1" : "0",
              visibility: index === currentPerson ? "visible" : "hidden",
            }}
          >
            <img src={item.image} className="person-img" alt={item.name} />
            <h5 className="name">{item.name}</h5>
            <p className="title">{item.title}</p>
            <p className="text">{item.quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <div className="slide-circles">
        {people.map((_, personIndex) => (
          <button
            type="button"
            key={personIndex}
            className={`circle ${
              currentPerson === personIndex ? "active" : ""
            }`}
            onClick={() => setCurrentPerson(personIndex)}
          />
        ))}
      </div>

      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;

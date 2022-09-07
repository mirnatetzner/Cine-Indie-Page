import React, { useState, useEffect } from "react";

import useInterval from "../../hooks/useInterval";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import "./CarouselStyle.css";

function Slideshow({ item }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === item.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(item.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  useInterval(() => {
    next();
  }, 5000);

  return (
    <div className="slideshow">
      <div className="imagens">
        <img src={item[index]} alt="" />
      </div>
      <div className="acoes">
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>
    </div>
  );
}

export default Slideshow;

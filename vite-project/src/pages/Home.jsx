import Carousel from "../components/Carousel/Carousel";
import { useEffect, useState } from "react";
// import "../components/Carousel/CarouselStyle.css";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://cine-indie-api-resilia.herokuapp.com/filmes")
      .then((response) => response.json())
      .then((response) => setData(response));
  });

  const items = data.map(item => item.image)

  return (
    <div className="Home">
      <Carousel item={items} />
    </div>
  );
}

export default Home;

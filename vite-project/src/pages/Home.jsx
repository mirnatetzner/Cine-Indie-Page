import Carousel from "../components/Carousel/Carousel";
import { useEffect, useState } from "react";
import { DriveMyCar } from "../components/Elements/DriveMYCar"
import { Introduction } from "../components/Elements/Introduction"
import { CardsContainer } from "../components/CardContainer/CardContainer"

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
      <Introduction />
      <Carousel item={items} />
      <DriveMyCar />
      <CardsContainer />
    </div>
  );
}

export default Home

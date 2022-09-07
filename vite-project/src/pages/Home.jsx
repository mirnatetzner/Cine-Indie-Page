import Carousel from "../components/Carousel/Carousel";
import { useEffect, useState } from "react";
import { DriveMyCar } from "../components/Elements/DriveMYCar"
import { Introduction } from "../components/Elements/Introduction"
import { CardsContainer } from "../components/CardContainer/CardContainer"
import { LaJetee } from "../components/Elements/LaJetee";
import Loading from "../components/Loading/Loading";

function Home() {
  const [data, setData] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false)

  useEffect(() => {
    setTimeout(
      () => {
        fetch("https://cine-indie-api-resilia.herokuapp.com/filmes")
        .then((response) => response.json())
        .then((response) => setData(response));
        setRemoveLoading(true)
      }, 3000)
  });

  const items = data.map(item => item.image)

  return (
    <div className="Home">
      <Introduction />
      {!removeLoading && <Loading />}
      <Carousel item={items} />
      <DriveMyCar />
      <LaJetee />
    </div>
  );
}

export default Home

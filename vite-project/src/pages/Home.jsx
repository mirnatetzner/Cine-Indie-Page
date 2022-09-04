import { DriveMyCar } from "../components/HomeElements/DriveMYCar"
import { Introduction } from "../components/HomeElements/Introduction"
import { CardsContainer } from "../components/CardContainer/CardContainer"

function Home() {

  return (
    <div className="Home">
      <Introduction />
      <DriveMyCar />
    </div>
  )
}

export default Home

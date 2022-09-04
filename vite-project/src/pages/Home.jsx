import { DriveMyCar } from "../components/Elements/DriveMYCar"
import { Introduction } from "../components/Elements/Introduction"
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

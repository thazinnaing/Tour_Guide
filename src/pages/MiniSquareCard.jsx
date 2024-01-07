import SquareCard from "../components/SquareCard"
import { Div } from "../components/base"

const cardData = [
  {amount: "24+", title: "Cities"},
  {amount: "700+", title: "Places"},
  {amount: "200+", title: "Hotel"},
  {amount: "2k+", title: "Review"}
]
const MiniSquareCard = () => {
  return (
    <Div>
      <SquareCard cardData={cardData}/>
    </Div>
  )
}

export default MiniSquareCard

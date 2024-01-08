import { cn } from "../utils"
import { Div, H2, H3 } from "../components/base"

const cardData = [
  {amount: "24+", title: "Cities"},
  {amount: "700+", title: "Places"},
  {amount: "200+", title: "Hotel"},
  {amount: "2k+", title: "Review"}
]
const MiniSquareCard = () => {
  const content = cardData.map((card,index)=>(
      <Div key={index} className={cn('flex flex-col justify-center items-center gap-5 rounded-md shadow-custom py-9')}>
        <H2 className={cn('text-secondary text-3xl')}>{card.amount}</H2>
        <H3>{card.title}</H3>
      </Div>
    )
  )
  
  return (
    <Div className={cn('grid grid-cols-2 md:grid-cols-4 gap-5')}>
      {content}
    </Div>
  )
}

export default MiniSquareCard

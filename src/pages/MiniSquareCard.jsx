import { cn } from "../utils"
import { Div, H2, H3 } from "../components/base"
import { squareCardData } from "../components/Data"

const MiniSquareCard = () => {
  const content = squareCardData.map((card,index)=>(
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

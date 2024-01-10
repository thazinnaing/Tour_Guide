import { cn } from "../utils"
import { Div, H2, H3 } from "../components/base"
import { squareCardData } from "../components/Data"

const MiniSquareCard = () => {
  const content = squareCardData.map((card)=>(
      <Div key={card.id} className={cn('dark:bg-white dark:text-black flex flex-col justify-center items-center gap-5 rounded-md shadow-custom  dark:shadow-custom py-9')}>
        <H2 className={cn('text-secondary text-3xl')}>{card.amount}</H2>
        <H3>{card.title}</H3>
      </Div>
    )
  )
  
  return (
    <Div className={cn('grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-5')}>
      {content}
    </Div>
  )
}

export default MiniSquareCard

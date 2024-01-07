import { cn } from "../utils"
import { Div, H2, H3 } from "./base"

const SquareCard = ({cardData}) => {
  const content = cardData.map((card,index)=>{
    return(
      <Div key={index} className={cn('flex flex-col justify-center items-center gap-5 rounded-md shadow-custom py-9 w-1/4')}>
        <H2 className={cn('text-secondary text-3xl')}>{card.amount}</H2>
        <H3>{card.title}</H3>
      </Div>
    )
  })
  return (
    <Div className={cn('flex justify-between gap-5')}>
      {content}
    </Div>
  )
}

export default SquareCard

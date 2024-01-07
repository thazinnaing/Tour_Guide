import { cn } from "../utils"
import Card from "./Card"
import { Div } from "./base"

const CardGrid = ({cards}) => {
  return (
    <Div className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4')}>
      {cards.map(card => {
        return (
          <Card key={card.id} card={card} />
        )
      })}
    </Div>
  )
}

export default CardGrid;
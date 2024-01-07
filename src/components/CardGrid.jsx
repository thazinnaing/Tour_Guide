import { cn } from "../utils"
import Card from "./Card"
import { Div, H2 } from "./base"

const CardGrid = ({cards}) => {
  return (
    <Div>
      {cards.length > 0 ?     
        <Div className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4')}>
          {cards.map(card => {
              return (
                <Card key={card.id} card={card} />
              )
            })
          } 
        </Div>
        : <H2 className={cn('text-center')}> No Result</H2>
      }
    </Div>
  )
}

export default CardGrid;
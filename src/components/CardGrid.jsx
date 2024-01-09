import { cn } from "../utils"
import Card from "./Card"
import { Div, H2 } from "./base"

const CardGrid = ({cards}) => {
  return (
    <Div>
      {cards.length > 0 ?     
        <Div className={cn('grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5')}>
          {cards.map(card => {
              return (
                <Card key={card.id} card={card} />
              )
            })
          } 
        </Div>
        : 
        <Div className={cn('p-10 shadow-custom')}>
          <H2 className={cn('text-center')}> No Result</H2>
        </Div>
        
      }
    </Div>
  )
}

export default CardGrid;
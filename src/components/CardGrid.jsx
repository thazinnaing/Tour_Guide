import { cn } from "../utils"
import { Div } from "./base"

const CardGrid = ({children}) => {
  return (
    <Div className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4')}>
      {children}
    </Div>
  )
}

export default CardGrid;
import { cn } from '../../utils'
import { Div } from './Div'

export const Divider = ({className}) => {
  return (
    <Div className={cn('w-0.5 opacity-10 h-full bg-black', className)}>

    </Div>
  )
}

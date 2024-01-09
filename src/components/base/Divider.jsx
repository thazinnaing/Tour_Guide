import { cn } from '../../utils'
import { Div } from './Div'

export const Divider = ({className, horizontal}) => {
  return (
    <Div className={cn('w-0.5 h-full',horizontal && 'w-full h-0.5' ,className)}>

    </Div>
  )
}

import { cn } from "../../utils"

export const Input = ({className, ...rest}) => {
  return (
    <input className={cn('px-2', className)} type="text" {...rest}/>
  )
}


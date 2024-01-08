import { cn } from "../../utils"

export const Img = ({className, src, ...rest}) => {
  return (
    <img className={cn('rounded-md',className)} src={src} {...rest}/>
  )
}


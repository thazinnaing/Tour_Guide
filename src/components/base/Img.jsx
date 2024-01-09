import { cn } from "../../utils"

export const Img = ({className, src, ...rest}) => {
  return (
    <img className={cn('',className)} src={src} {...rest}/>
  )
}


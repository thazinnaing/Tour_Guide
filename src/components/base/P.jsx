import { cn } from "../../utils"

export const P = ({children, className, ...rest}) => {
  return (
    <p className={cn('',className)} {...rest}>{children}</p>
  )
}
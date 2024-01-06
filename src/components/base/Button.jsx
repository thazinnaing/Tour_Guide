import { cn } from "../../utils"

export const Button = ({children, className, ...rest}) => {
  return (
    <button className={cn("text-white py-2 px-6 rounded-md",className)} {...rest}>{children}</button>
  )
}
import { cn } from "../../utils"

export const Input = ({className, text, ...rest}) => {
  return (
    <input className={cn('bg-transparent px-2 outline-none sm:text-l', className)} type={text} {...rest}/>
  )
}


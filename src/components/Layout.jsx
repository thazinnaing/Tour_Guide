import { cn } from "../utils";
import { Div } from "./base";

const Layout = ({children, className, ...rest}) => {
  return (
    <Div className={cn("max-w-[1280px] mx-auto", className)} {...rest}>
      {children}
    </Div>
  )
}

export default Layout;
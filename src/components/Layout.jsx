import { cn } from "../utils";
import { Div } from "./base";
import { Navigation } from "./nav_bar";

const Layout = ({children, className, ...rest}) => {
  return (
    <Div className={cn("max-w-[1280px] mx-auto flex flex-col gap-12 p-8", className)} {...rest}>
      <Navigation/>
      {children}
    </Div>
  )
}

export default Layout;
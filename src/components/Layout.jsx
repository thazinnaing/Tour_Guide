import { cn } from "../utils";
import Theme from "./Theme";
import { Div } from "./base";
import { Navigation } from "./nav_bar";
import { Outlet } from "react-router-dom";

const Layout = ({className, ...rest}) => {
  return (
    <Div className={cn("max-w-[1280px] w-full mx-auto flex flex-col gap-12 p-3 2xs:p-5 xs:p-8 overflow-x-hidden", className)} {...rest}>
      <Navigation/>
      <Theme className={cn('fixed left-7 xs:left-10 top-20 xs:top-24 2xl:left-40 p-2 xs:p-3 z-50 rounded-full bg-gray-600 dark:bg-gray-100 text-secondary dark:text-secondary')}/>
      <Outlet />
    </Div>
  )
}

export default Layout;
import { cn } from "../../utils";
import Tab from "../Tab";
import { Button, Div } from "../base";
import { navTabs } from "../Data";

const Navigation = ({className, ...rest}) => {
  return (
    <Div className={cn('flex justify-between', className)} {...rest}>
      <Div>Logo</Div>
      <Div className={cn('flex justify-between gap-10')}>
        {navTabs.map(tab => {
          return (
            <Tab key={tab.id} data={tab}/>
          )
        })}
      </Div>
      <Button className={cn('bg-secondary')}>Login</Button>
    </Div>
  )
}

export default Navigation;
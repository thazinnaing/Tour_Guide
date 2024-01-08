import { cn } from "../../utils";
import Tab from "../Tab";
import { Button, Div, H3 } from "../base";
import { navTabs } from "../Data";
import { AlignJustify, PlaneTakeoff } from "lucide-react";

const Navigation = () => {
  return (
    <Div className={cn('flex justify-between items-center')}>
      <Div className={cn('flex gap-1 items-center')}>
        <PlaneTakeoff size={30} className={cn('text-secondary')}/>
        <H3>Touro</H3>
      </Div>
      <Div className={cn('flex justify-between hidden sm:flex sm:gap-5 md:gap-10')}>
        {navTabs.map(tab => {
          return (
            <Tab key={tab.id} data={tab}/>
          )
        })}
      </Div>
      <Div className={cn('flex gap-10')}>
        <Button className={cn('bg-secondary px-5 py-2')}>Login</Button>
        <Div className={cn('flex items-center sm:hidden')}>
          <AlignJustify size={30}/>
        </Div>
      </Div> 
    </Div>
  )
}

export default Navigation;
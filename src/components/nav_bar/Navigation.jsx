import { cn } from "../../utils";
import Tab from "../Tab";
import { Button, Div, H3 } from "../base";
import { navTabs } from "../Data";
import { AlignJustify, PlaneTakeoff } from "lucide-react";

const Navigation = () => {
  return (
    <Div className={cn('flex justify-between items-center')}>
      <Div className={cn('flex justify-center items-center ')}>
        <Div>
          <PlaneTakeoff size={30} className={cn('text-secondary')}/>
        </Div>
        <Div className={cn('flex items-center justify-center')}>
          <H3>Touro</H3>
        </Div>
      </Div>
      <Div className={cn('sm:flex justify-between items-center hidden sm:gap-5 md:gap-10')}>
        {navTabs.map(tab => (
            <Tab key={tab.id} data={tab}/>
          )
        )}
      </Div>
      <Div className={cn('flex justify-between gap-5')}>
        <Div>
          <Button className={cn('bg-secondary py-2 hover:bg-orange-300 active:bg-orange-500')}>Login</Button>
        </Div>
        <Div className={cn('flex items-center ml-5 sm:hidden')}>
          <AlignJustify size={30}/>
        </Div>
      </Div> 
    </Div>
  )
}

export default Navigation;
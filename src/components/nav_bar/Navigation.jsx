import { cn } from "../../utils";
import Tab from "../Tab";
import { Button, Div, H3 } from "../base";
import { navTabs } from "../Data";
import { AlignJustify, PlaneTakeoff } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isClick, setIsClick]= useState(false);

 const onClickHandler = () =>{
  setIsClick(x => !x)
 }
 console.log("isclick", isClick)

 const content = navTabs.map(tab=>(
  <Tab key={tab.id} data={tab} />
 ))

  return (
    <Div className={cn('flex justify-between items-center')}>
      <Div className={cn('flex justify-center items-center gap-1 ')}>
        <Div>
          <PlaneTakeoff size={30} className={cn('text-secondary')}/>
        </Div>
        <Div className={cn('flex items-center justify-center')}>
          <H3 className={cn('sm:text-xl')}>Touro</H3>
        </Div>
      </Div>
      <Div className={cn('sm:flex justify-between items-center hidden sm:gap-5 md:gap-10')}>
        {content}
      </Div>
      <Div className={cn('flex justify-between gap-3 xs:gap-10')}>
        <Div>
          <Button className={cn('bg-secondary dark:bg-secondary py-2 hover:bg-orange-300 active:bg-orange-500')}>Login</Button>
        </Div>
        <Div onClick={onClickHandler} className={cn('flex items-center sm:hidden')}>
          <AlignJustify size={30}/>
        </Div>
        <Div className={cn('md:hidden dark:bg-white dark:text-black absolute top-14 2xs:top-16 xs:top-20 -right-full flex flex-col gap-2 p-3 w-20 2xs:w-28 xs:gap-3 xs:p-4 xs:w-32 shadow-custom rounded-lg transition-all duration-500', isClick && 'right-3 2xs:right-5 xs:right-8 transition-all duration-500')} >
          {navTabs.map(tab => {
            return(
                <Tab key={tab.id} data={tab} className={cn('dark:bg-white dark:text-black')}/>
                )
              })
          }
        </Div>
      </Div> 
    </Div>
  )
}

export default Navigation;
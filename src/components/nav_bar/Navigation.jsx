import { cn } from "../../utils";
import Tab from "../Tab";
import { Button, Div, H3 } from "../base";
import { navTabs } from "../Data";
import { AlignJustify, PlaneTakeoff } from "lucide-react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('home');
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  window.addEventListener('scroll',()=>{
    const scrollY= window.scrollY;
    if(scrollY > 100){
      if(lastScroll > scrollY){
        setShowNav(true)
      }else{
        setShowNav(false)
      }
    }
    setLastScroll(scrollY)
  })
 
 const onClickHandler = useCallback(()=>{
  setIsOpen(x=>!x)
 },[setIsOpen])

 const scrollRoute = useCallback(()=>{
  const scrollSection = document.querySelector("#scroll");
  scrollSection.scrollIntoView({behavior: 'smooth', block: 'start'})
 },[])

 const chooseMenu= useCallback((data)=> {
  setFilter(data.category)
  data.title === 'Category' ? scrollRoute() : navigate(data.url)
},[setFilter, navigate, scrollRoute])

 const closeMenu= useCallback((data)=> {
  setFilter(data.category)
  setIsOpen(x=>!x)
  data.title === 'Category' ? scrollRoute() : navigate(data.url)
},[setIsOpen, setFilter, navigate, scrollRoute])

 const content = navTabs.map(tab=>(
  <Tab key={tab.id} data={tab} isNavActive={tab.category === filter} onClick={chooseMenu} />
 ))

  return (
    <Div className={cn('w-full fixed left-0 flex items-center justify-center transition duration-200 ease-in-out',(showNav) ? 'fixed z-10 opacity-100 top-0 py-5': '-top-full')}>
      <Div className={cn('max-w-[1280px] w-full flex justify-between items-center px-3 2xs:px-5 xs:px-8')}>
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
          <Div className={cn('hidden', isOpen && 'sm:hidden top-14 2xs:top-16 xs:top-20 absolute right-3 2xs:right-5 xs:right-8 flex flex-col gap-2 p-3 w-20 2xs:w-28 xs:gap-3 xs:p-4 xs:w-32 dark:bg-white dark:text-black shadow-custom rounded-lg transition-all ease-in-out duration-300')} >
            {navTabs.map(tab => {
              return(
                  <Tab key={tab.id} data={tab} isNavActive={tab.category === filter} onClick={closeMenu} className={cn('dark:bg-white dark:text-black')}/>
                  )
                })
            }
          </Div>
        </Div> 
      </Div>
    </Div>
  )
}

export default Navigation;
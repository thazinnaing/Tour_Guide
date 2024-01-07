import { cn } from "../../utils";
import Tab from "../Tab";
import { Button, Div } from "../base";

const tabs = [
  {id: 0, title: "Home"},
  {id: 1, title: "Category"},
  {id: 2, title: "Blog"},
  {id: 5, title: "About Us"}
]

const Navigation = ({className, ...rest}) => {
  return (
    <Div className={cn('flex justify-between', className)} {...rest}>
      <Div>Logo</Div>
      <Div className={cn('flex justify-between gap-10')}>
        {tabs.map(tab => {
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
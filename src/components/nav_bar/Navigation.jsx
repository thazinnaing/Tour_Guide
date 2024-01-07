import { cn } from "../../utils";
import Tab from "../Tab";
import { Button, Div } from "../base";

const Navigation = ({className, ...rest}) => {
  return (
    <Div className={cn('flex justify-between', className)} {...rest}>
      <Div>Logo</Div>
      <Div className={cn('flex justify-between gap-10')}>
        <Tab title="Home" />
        <Tab title="Category" />
        <Tab title="Blog" />  
        <Tab title="About Us" />
      </Div>
      <Button className={cn('bg-secondary')}>Login</Button>
    </Div>
  )
}

export default Navigation;
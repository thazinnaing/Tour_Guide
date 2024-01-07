import { cn } from "../utils";
import CardGrid from "./CardGrid";
import { Div, H2 } from "./base";
import { Tab } from "./nav_bar";

const PlaceContainer  = ({places, tabs, label, }) => {
  return (
    <Div>
      <H2>{label}</H2>
      <Div className={cn('flex justify-end')}>
        <Div className={cn('flex justify-between my-2 md:w-1/2')}>
          {tabs.map(tab => (
            <Tab title={tab.title} key={tab.id}/>
          ))}
        </Div>
      </Div>
      <CardGrid cards={places}/>
    </Div>
  )
}



export default PlaceContainer;
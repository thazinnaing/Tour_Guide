import { cn } from "../utils";
import CardGrid from "./CardGrid";
import { Div, H2 } from "./base";

const PlaceContainer  = ({places, tabs, label, }) => {
  return (
    <Div>
      <H2>{label}</H2>
      <Div className={cn('flex justify-end')}>
        <Div className={cn('flex justify-between my-2 md:w-1/2')}>
          {tabs.map(tab => (
            <p key={tab.id}>{tab.title}</p>
          ))}
        </Div>
      </Div>
      <CardGrid cards={places}/>
    </Div>
  )
}

export default PlaceContainer;
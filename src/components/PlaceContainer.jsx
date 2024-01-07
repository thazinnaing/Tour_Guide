import { useCallback, useState } from "react";
import { usePlaces } from "../api/places";
import { cn } from "../utils";
import CardGrid from "./CardGrid";
import Tab from "./Tab";
import { Div, H2 } from "./base";

const PlaceContainer  = ({tabs, label, }) => {
  const [filterID, setFilterID] = useState(1)
  const data = usePlaces(filterID)
  const onFilterChange = useCallback((id) => {
    setFilterID(id)
  },[])
  return (
    <Div>
      <H2>{label}</H2>
      <Div className={cn('flex justify-end')}>
        <Div className={cn('flex justify-between my-2 md:w-1/2 w-full')}>
          {tabs.map(tab => (
            <Tab data={tab} key={tab.id} onClick={onFilterChange}/>
          ))}
        </Div>
      </Div>
      <CardGrid cards={data?.places || []}/>
    </Div>
  )
}



export default PlaceContainer;
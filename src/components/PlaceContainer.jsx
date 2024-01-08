import { useCallback, useState } from "react";
import { cn } from "../utils";
import CardGrid from "./CardGrid";
import Tab from "./Tab";
import { Div, H2 } from "./base";
import { usePopularPlaces } from "../api";

const PlaceContainer  = ({tabs, label }) => {
  const [filterID, setFilterID] = useState(1)
  const data = usePopularPlaces(filterID)

  const onFilterChange = useCallback((id) => {
    setFilterID(id)
  },[])

  return (
    <Div className={cn('flex flex-col')}>
      <H2>{label}</H2>
      <Div className={cn('flex sm:justify-end')}>
        <Div className={cn('flex justify-between mt-4 mb-5 sm:mt-2 sm:mb-8 md:mb-8 w-full sm:w-2/3 md:w-1/2')}>
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
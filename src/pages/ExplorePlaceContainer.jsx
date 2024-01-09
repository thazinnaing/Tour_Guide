import { useCallback, useState } from "react";
import { cn } from "../utils";
import CardGrid from "../components/CardGrid";
import Tab from "../components/Tab";
import { Div, H2 } from "../components/base";
import { useExplorePlaces } from "../api";
import { tabs } from "../components";

const ExplorePlaceContainer  = () => {
  const [filterId, setFilterId] = useState(1)
  const data = useExplorePlaces(filterId)

  const onFilterChange = useCallback((id) => {
    setFilterId(id)
  },[])

  return (
    <Div className={cn('flex flex-col')}>
      <H2>Explore Places</H2>
      <Div className={cn('flex sm:justify-end')}>
        <Div className={cn('flex justify-between mt-4 mb-5 sm:mt-2 sm:mb-8 md:mb-8 w-full sm:w-2/3 md:w-1/2')}>
          {tabs.map(tab => (
            <Tab className={cn('text-sm xs:text-base xs:font-semibold')} data={tab} key={tab.id} filterID={filterId} onClick={onFilterChange}/>
          ))}
        </Div>
      </Div>
      <CardGrid cards={data?.places || []}/>
    </Div>
  )
}

export default ExplorePlaceContainer;
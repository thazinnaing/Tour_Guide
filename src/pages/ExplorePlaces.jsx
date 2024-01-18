import { useCallback, useState } from "react";
import { tabs } from "../components";
import {PlaceContainer} from "../components";
import { Div } from "../components/base";
import { useExplorePlaces } from "../api";


const ExplorePlaces = () => {
  const [filter, setFilter] = useState('beach');
  
  const data = useExplorePlaces(filter)

  const onFilterChange = useCallback((data) => {
    setFilter(data.category);
  }, [setFilter]);

  return (
    <Div id="scroll">
      <PlaceContainer
        filter={filter}
        label="Explore Places"
        places={data}
        onFilterChange={onFilterChange}
        tabs={tabs}
      />
    </Div>
  );
};

export default ExplorePlaces;

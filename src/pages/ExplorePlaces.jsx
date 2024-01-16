import { useCallback, useState } from "react";
import { useExplorePlaces } from "../api";
import { tabs } from "../components";
import {PlaceContainer} from "../components";
import { Div } from "../components/base";

const ExplorePlaces = () => {
  const [filterId, setFilterId] = useState(1);
  const data = useExplorePlaces(filterId);

  const onFilterChange = useCallback((data) => {
    setFilterId(data.id);
  }, []);

  return (
    <Div id="scroll">
      <PlaceContainer
        filterId={filterId}
        label="Explore Places"
        places={data?.places}
        onFilterChange={onFilterChange}
        tabs={tabs}
      />
    </Div>
  );
};

export default ExplorePlaces;

import { useCallback, useState } from "react";
import { useExplorePlaces } from "../api";
import { tabs } from "../components";
import {PlaceContainer} from "../components";

const ExplorePlaces = () => {
  const [filterId, setFilterId] = useState(1);
  const data = useExplorePlaces(filterId);

  const onFilterChange = useCallback((id) => {
    setFilterId(id);
  }, []);

  return (
    <PlaceContainer
      filterId={filterId}
      label="Explore Places"
      places={data?.places}
      onFilterChange={onFilterChange}
      tabs={tabs}
    />
  );
};

export default ExplorePlaces;

import { useCallback, useState } from "react";
import { tabs } from "../components";
import {PlaceContainer} from "../components";
import { usePopularPlaces } from "../api";

const PopularPlaces = () => {
  const [filterId, setFilterId] = useState(1);
  const data = usePopularPlaces(filterId);

  const onFilterChange = useCallback((id) => {
    setFilterId(id);
  }, []);

  return (
    <PlaceContainer
      filterId={filterId}
      label="Popular Places"
      places={data?.places}
      onFilterChange={onFilterChange}
      tabs={tabs}
    />
  );
};

export default PopularPlaces;

import { useCallback, useState } from "react";
import { tabs } from "../components";
import {PlaceContainer} from "../components";
import { usePopularPlaces } from "../api";

const PopularPlaces = () => {
  const [filter, setFilter] = useState('beach');
  const data = usePopularPlaces(filter);

  const onFilterChange = useCallback((data) => {
    setFilter(data.category);
  }, [setFilter]);

  return (
    <PlaceContainer
      filter={filter}
      label="Popular Places"
      places={data}
      onFilterChange={onFilterChange}
      tabs={tabs}
    />
  );
};

export default PopularPlaces;

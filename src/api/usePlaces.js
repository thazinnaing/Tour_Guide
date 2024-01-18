import { places } from "./places";

export const usePopularPlaces = (filter) => {
  if (filter === "view_all") {
   const p = places.filter((p) => p.isPopular)
   return p;
  }
  const p = places.filter((p) => p.category === filter && p.isPopular);
  return p;
};

export const useExplorePlaces = (filter) => {
  if (filter === "view_all") {
   const p = places.filter((p) => !p.isPopular)
   return p;
  }
  const p = places.filter((p) => p.category === filter && !p.isPopular);
  return p;
};

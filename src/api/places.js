const places = [
  {
    id: 0,
    places: [
      { id: 0, title: "something", description: "some description" },
      { id: 1, title: "something", description: "some description" },
      { id: 2, title: "something", description: "some description" },
      { id: 3, title: "something", description: "some description" },
    ],
  },
  {
    id: 1,
    places: [
      { id: 4, title: "something two", description: "some description two" },
      { id: 5, title: "something two", description: "some description two" },
      { id: 6, title: "something two", description: "some description two" },
      { id: 7, title: "something two", description: "some description two" },
    ],
  },
  {
    id: 2,
    places: [
      {
        id: 8,
        title: "something three",
        description: "some description three",
      },
      {
        id: 9,
        title: "something three",
        description: "some description three",
      },
      {
        id: 10,
        title: "something three",
        description: "some description three",
      },
      {
        id: 11,
        title: "something three",
        description: "some description three",
      },
    ],
  },
  {
    id: 3,
    places: [
      { id: 12, title: "something four", description: "some description four" },
      { id: 13, title: "something four", description: "some description four" },
      { id: 14, title: "something four", description: "some description four" },
      { id: 15, title: "something four", description: "some description four" },
    ],
  },
];

export const usePlaces = (id) => {
  if (typeof id === "string") {
    const p = places.map((p) => p.places);
    const plc = p.flatMap((p) => p);

    return {
      id: "view all",
      places: plc,
    };
  }
  const p = places.filter((p) => p.id === id)[0];
  return p;
};

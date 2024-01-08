const places = [
  {
    id: 0,
    places: [
      {
        id: 0,
        image: "",
        title: "something three",
        description: "some description three",
      },
      {
        id: 1,
        image: "",
        title: "something three",
        description: "some description three",
      },
      {
        id: 2,
        image: "",
        title: "something three",
        description: "some description three",
      },
      {
        id: 3,
        image: "",
        title: "something three",
        description: "some description three",
      },
    ],
  },
  {
    id: 1,
    places: [
      {
        id: 4,
        image: "",
        title: "something three",
        description: "some description three",
      },
      {
        id: 5,
        image: "",
        title: "something three",
        description: "some description three",
      },
      {
        id: 6,
        image: "",
        title: "something three",
        description: "some description three",
      },
      {
        id: 7,
        image: "",
        title: "something three",
        description: "some description three",
      },
    ],
  },
  {
    id: 2,
    places: [
      {
        id: 8,
        image: "",
        title: "something three",
        description: "some description three",
      },
      {
        id: 9,
        image: "",
        title: "something three",
        description: "some description three",
      },
      {
        id: 10,
        image: "",
        title: "something three",
        description: "some description three",
      },
      {
        id: 11,
        image: "",
        title: "something three",
        description: "some description three",
      },
    ],
  },
];

export const usePopularPlaces = (id) => {
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

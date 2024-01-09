const places = [
  {
    id: 0,
    places: [
      {
        id: 0,
        image: "https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Whitehaven Beach",
        description: "Such a beautiful beach!",
      },
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1580223530509-849e0ad583ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoZXN8ZW58MHx8MHx8fDA%3D",
        title: "Honopu Beach",
        description: "Such a beautiful beach!",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1600273970168-c3db62dcf905?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYWNoZXN8ZW58MHx8MHx8fDA%3D",
        title: "Praia do Sancho",
        description: "Such a beautiful beach!",
      }
    ],
  },
  {
    id: 1,
    places: [
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
        title: "Mount Everest",
        description: "Highest mountain in the world",
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWlufGVufDB8fDB8fHww",
        title: "Kangchenjunga",
        description: "Highest mountain in the world",
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vdW50YWlufGVufDB8fDB8fHww",
        title: "Mount Damavand",
        description: "Highest mountain in the world",
      }
    ],
  },
  {
    id: 2,
    places: [
      {
        id: 6,
        image: "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXJmYWxsfGVufDB8fDB8fHww",
        title: "Huangguoshu Waterfall",
        description: "This is amazing waterfall.",
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1493713838217-28e23b41b798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGVyZmFsbHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Haifoss",
        description: "This is amazing waterfall.",
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGVyZmFsbHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Glymur Waterfall",
        description: "This is amazing waterfall.",
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

export interface IPet {
  name: string;
  description: string;
  filter: string;
  image: string;
}

export const pets: IPet[] = [
  {
    name: "Zana",
    description: "TODO",
    filter: "Honden",
    image: "zana.jpg",
  },
  {
    name: "Peggy",
    description: "TODO",
    filter: "Honden",
    image: "peggy.jpg",
  },
  {
    name: "Mocha",
    description: "TODO",
    filter: "Katten",
    image: "mocha.jpg",
  },
  {
    name: "Crosby",
    description: "TODO",
    filter: "Honden",
    image: "crosby.jpg",
  },
];

export type IPetFilter = "Honden" | "Katten" | "Overige";

export interface IPet {
  name: string;
  filter: IPetFilter;
  image: string;
}

export const pets: IPet[] = [
  {
    name: "Zana",
    filter: "Honden",
    image: "zana.jpg",
  },
  {
    name: "Peggy",
    filter: "Honden",
    image: "peggy.jpg",
  },
  {
    name: "Mocha",
    filter: "Katten",
    image: "mocha.jpg",
  },
  {
    name: "Fried chicken",
    filter: "Honden",
    image: "chickens.jpg",
  },
];

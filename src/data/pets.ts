export interface IPet {
  name: string;
  breed: string;
  size: "Klein" | "Gemiddeld" | "Groot";
  gender: string;
  color: string;
  filter: string;
  image: string;
}

export const pets: IPet[] = [
  {
    name: "Zana",
    breed: "Shiba",
    size: "Klein",
    gender: "Man",
    color: "Grijs, Wit",
    filter: "Honden",
    image: "zana.jpg",
  },
  {
    name: "Peggy",
    breed: "Labrador retriever",
    size: "Groot",
    gender: "Man",
    color: "Zwart",
    filter: "Honden",
    image: "peggy.jpg",
  },
  {
    name: "Mocha",
    breed: "Ragamuffin",
    size: "Klein",
    gender: "Vrouw",
    color: "Wit",
    filter: "Katten",
    image: "mocha.jpg",
  },
  {
    name: "Sammy",
    breed: "Steenkonijn",
    size: "Klein",
    gender: "Vrouw",
    color: "Lichtbruin",
    filter: "Konijnen",
    image: "sammy.jpg",
  },
  {
    name: "Crosby",
    breed: "Drentsche Patrijshond",
    size: "Gemiddeld",
    gender: "Man",
    color: "Bruin, Wit",
    filter: "Honden",
    image: "crosby.jpg",
  },
  {
    name: "Jamie",
    breed: "Kooikerhondje",
    size: "Gemiddeld",
    gender: "Man",
    color: "Lichtbruin",
    filter: "Honden",
    image: "jamie.jpg",
  },
  {
    name: "Sassy",
    breed: "Noorse boskat",
    size: "Gemiddeld",
    gender: "Vrouw",
    color: "Zwart, Bruin",
    filter: "Katten",
    image: "sassy.jpg",
  },
  {
    name: "Gavin",
    breed: "Hollander",
    size: "Klein",
    gender: "Man",
    color: "Donkergrijs, Wit",
    filter: "Konijnen",
    image: "gavin.jpg",
  },
];

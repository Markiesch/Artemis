export interface IArticle {
  id: number;
  date: string;
  author: string;
  title: string;
  content: string;
  image: string;
}

export const articles: IArticle[] = [
  {
    id: 3,
    date: "23 oktober, 2021",
    author: "Mark Schuurmans",
    title: "Nog een nieuwsartikel!",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo ab nesciunt aperiam adipisci et quas atque voluptatem blanditiis minus similique cumque amet exercitationem commodi, illo minima nemo eaque eligendi.",
    image: "slider1.jpg",
  },
  {
    id: 2,
    date: "28 oktober, 2021",
    author: "Mark Schuurmans",
    title: "Tweede nieuwsartikel",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo ab nesciunt aperiam adipisci et quas atque voluptatem blanditiis minus similique cumque amet exercitationem commodi, illo minima nemo eaque eligendi.",
    image: "slider2.jpg",
  },
  {
    id: 1,
    date: "4 november, 2021",
    author: "Mark Schuurmans",
    title: "Eerste nieuwsartikel!",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo ab nesciunt aperiam adipisci et quas atque voluptatem blanditiis minus similique cumque amet exercitationem commodi, illo minima nemo eaque eligendi.",
    image: "slider3.jpg",
  },
];

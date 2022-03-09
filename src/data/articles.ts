export interface IArticle {
  id: number;
  title: string;
  content: string;
  image: string;
}

export const articles: IArticle[] = [
  {
    id: 3,
    title: "Nog een nieuwsartikel!",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo ab nesciunt aperiam adipisci et quas atque voluptatem blanditiis minus similique cumque amet exercitationem commodi, illo minima nemo eaque eligendi.",
    image: "slider1.jpg",
  },
  {
    id: 2,
    title: "Tweede nieuwsartikel",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo ab nesciunt aperiam adipisci et quas atque voluptatem blanditiis minus similique cumque amet exercitationem commodi, illo minima nemo eaque eligendi.",
    image: "slider1.jpg",
  },
  {
    id: 1,
    title: "Eerste nieuwsartikel!",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo ab nesciunt aperiam adipisci et quas atque voluptatem blanditiis minus similique cumque amet exercitationem commodi, illo minima nemo eaque eligendi.",
    image: "slider1.jpg",
  },
];

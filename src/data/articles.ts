export interface IArticle {
  id: number;
  date: string;
  author: string;
  title: string;
  subtitle: string;
  content: string[];
  image: string;
}

export const articles: IArticle[] = [
  {
    id: 5,
    date: "23 oktober, 2021",
    author: "Mark Schuurmans",
    title: "Huisdieren vaccineren van levensbelang",
    subtitle:
      "Nu er in coronatijd meer huisdieren zijn aangeschaft, doen we een dringend beroep op de eigenaren om ook te zorgen voor een adequate vaccinatie van het huisdier. Uit onderzoek blijkt dat de vaccinatiegraad onder dieren onder normale omstandigheden al erg laag is.",
    content: [
      "Nu er in coronatijd meer huisdieren zijn aangeschaft, doen we een dringend beroep op de eigenaren om ook te zorgen voor een adequate vaccinatie van het huisdier. Uit onderzoek blijkt dat de vaccinatiegraad onder dieren onder normale omstandigheden al erg laag is, waardoor aannemelijk is dat ook nu grote aantallen huisdieren niet op tijd worden gevaccineerd. Dit kan leiden tot ellende voor dier en mens, maar ook voor onze asielen die gedumpte- en gevonden dieren opvangen én vaccineren.",
      "Deze zomer voert de Dierenbescherming samen met de beroepsorganisatie van dierenartsen (KNMvD) en Stichting Zwerfkatten Nederland een bewustwordingscampagne over het belang van het vaccineren van huisdieren. Onder ruim 1.500 dierenartspraktijken verspreiden we informatie over de noodzaak van vaccinatie zodat huisdiereigenaren het belang ervan inzien en besmettelijke ziekten onder huisdieren geen kans krijgen. Ook via onze sociale media (Facebook, Twitter, Instagram) besteden we uitvoerig aandacht aan de vreselijke gevolgen die het niet vaccineren van huisdieren kan hebben. ",
    ],
    image: "slider1.jpg",
  },
  {
    id: 4,
    date: "28 oktober, 2021",
    author: "Remco Evers",
    title: "Gevonden pups groeien als kool!",
    subtitle:
      "De tijd vliegt in het gastgezin waar begin november de gevonden pups Charlie en Louie uit Deventer verblijven. De kleine, kwestbare puppy's doen het echt supergoed en ook het gewicht gaat de goede kant uit.",
    content: [
      "De tijd vliegt in het gastgezin waar begin november de gevonden pups Charlie en Louie uit Deventer verblijven. De kleine, kwestbare puppy's doen het echt supergoed en ook het gewicht gaat de goede kant uit.",
      "De puppies werden eind oktober gevonden in een kinderrugtas van Walt Disneys 'Frozen' aan de Diepenveenseweg in Deventer, aan de achterzijde van het station. De hondjes waren nog geen dag oud, het navelstrengetje zat er nog aan. Helaas was vanaf het begin te zien dat het met een van de drie puppy’s niet goed ging. ",
    ],
    image: "slider2.jpg",
  },
  {
    id: 3,
    date: "4 november, 2021",
    author: "Rob Wessels",
    title: "Collecteweek van start!",
    subtitle: `De medewerkers en vrijwilligers van de Dierenbescherming zetten zich elke dag opnieuw in om dieren te redden, op te vangen en te beschermen. Ze doen dit met liefde, maar kunnen dit alleen blijven doen met de steun van leden, donateurs en gulle gevers.`,
    content: [
      `De medewerkers en vrijwilligers van de Dierenbescherming zetten zich elke dag opnieuw in om dieren te redden, op te vangen en te beschermen. Ze doen dit met liefde, maar kunnen dit alleen blijven doen met de steun van leden, donateurs en gulle gevers. In de week van 27 september tot en met 3 oktober vragen we om steun tijdens de jaarlijkse collecteweek. Vrijwilligers gaan dan met de collectebus langs de deuren voor een bijdrage of collecteren digitaal met een online collectebus.`,
      `In Nederland leven miljoenen dieren. Huisdieren, landbouwdieren en wilde dieren. Deze dieren hebben zelf geen stem en komen daardoor helaas nogal eens in de verdrukking. De Dierenbescherming komt op voor deze dieren. Een aangereden kat, een verwaarloosde hond of een konijn dat achter is gelaten in het park, ze kunnen op onze hulp rekenen. Die hulp gaat dag en nacht door, ook in tijden van corona. We zijn onze collectanten daarom extra dankbaar voor hun tijd en inzet en we hopen dat deze inzet wordt beloond.`,
    ],
    image: "slider3.jpg",
  },
  {
    id: 2,
    date: "23 augustus, 2021",
    author: "Rob Wessels",
    title: "Titel nieuwsartikel",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat culpa quis quibusdam eius. Debitis recusandae quae minima sequi explicabo quos obcaecati porro praesentium est dolorum voluptate perferendis, id accusantium.`,
    content: ["TODO"],
    image: "slider3.jpg",
  },
  {
    id: 1,
    date: "18 juli, 2021",
    author: "Mark Schuurmans",
    title: "Titel nieuwsartikel",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat culpa quis quibusdam eius. Debitis recusandae quae minima sequi explicabo quos obcaecati porro praesentium est dolorum voluptate perferendis, id accusantium.`,
    content: ["TODO"],
    image: "slider3.jpg",
  },
  {
    id: 0,
    date: "3 juni, 2021",
    author: "Remco Evers",
    title: "Titel nieuwsartikel",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat culpa quis quibusdam eius. Debitis recusandae quae minima sequi explicabo quos obcaecati porro praesentium est dolorum voluptate perferendis, id accusantium.`,
    content: ["TODO"],
    image: "slider3.jpg",
  },
];

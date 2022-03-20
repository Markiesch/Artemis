export interface IArticle {
  id: number;
  date: string;
  author: string;
  title: string;
  subtitle: string;
  content: string[];
  image: string;
  bigImage: string;
}

export const articles: IArticle[] = [
  {
    id: 5,
    date: "23 oktober, 2021",
    author: "Mark Schuurmans",
    title: "Huisdieren vaccineren van levensbelang",
    subtitle: `Nu er in coronatijd meer huisdieren zijn aangeschaft, doen we een dringend beroep op de eigenaren om ook te zorgen voor een adequate vaccinatie van het huisdier. 
       Uit onderzoek blijkt dat de vaccinatiegraad onder dieren onder normale omstandigheden al erg laag is.`,
    content: [
      `Nu er in coronatijd meer huisdieren zijn aangeschaft, doen we een dringend beroep op de eigenaren om ook te zorgen voor een adequate vaccinatie van het huisdier. 
       Uit onderzoek blijkt dat de vaccinatiegraad onder dieren onder normale omstandigheden al erg laag is, waardoor aannemelijk is dat ook nu grote aantallen huisdieren 
       niet op tijd worden gevaccineerd. Dit kan leiden tot ellende voor dier en mens, maar ook voor onze asielen die gedumpte- en gevonden dieren opvangen én vaccineren.`,
      `Deze zomer voert de Dierenbescherming samen met de beroepsorganisatie van dierenartsen (KNMvD) en Stichting Zwerfkatten Nederland een bewustwordingscampagne over het 
      belang van het vaccineren van huisdieren. Onder ruim 1.500 dierenartspraktijken verspreiden we informatie over de noodzaak van vaccinatie zodat huisdiereigenaren het 
      belang ervan inzien en besmettelijke ziekten onder huisdieren geen kans krijgen. Ook via onze sociale media (Facebook, Twitter, Instagram) besteden we uitvoerig aandacht 
      aan de vreselijke gevolgen die het niet vaccineren van huisdieren kan hebben.`,
    ],
    image: "news1.jpg",
    bigImage: "news1.jpg",
  },
  {
    id: 4,
    date: "28 oktober, 2021",
    author: "Remco Evers",
    title: "Gevonden pups groeien als kool!",
    subtitle: `De tijd vliegt in het gastgezin waar begin november de gevonden pups Charlie en Louie uit Deventer verblijven. De kleine, kwestbare puppy's doen het echt supergoed 
               en ook het gewicht gaat de goede kant uit.`,
    content: [
      `De tijd vliegt in het gastgezin waar begin november de gevonden pups Charlie en Louie uit Deventer verblijven. De kleine, kwestbare puppy's doen het echt 
       supergoed en ook het gewicht gaat de goede kant uit.`,
      `De puppies werden eind oktober gevonden in een kinderrugtas van Walt Disneys 'Frozen' aan de Diepenveenseweg in Deventer, aan de achterzijde van het station. 
       De hondjes waren nog geen dag oud, het navelstrengetje zat er nog aan. Helaas was vanaf het begin te zien dat het met een van de drie puppy’s niet goed ging. `,
    ],
    image: "news2.jpg",
    bigImage: "news2-big.jpg",
  },
  {
    id: 3,
    date: "4 november, 2021",
    author: "Rob Wessels",
    title: "Collecteweek van start!",
    subtitle: `De medewerkers en vrijwilligers van de Dierenbescherming zetten zich elke dag opnieuw in om dieren te redden, op te vangen en te beschermen. 
               Ze doen dit met liefde, maar kunnen dit alleen blijven doen met de steun van leden, donateurs en gulle gevers.`,
    content: [
      `De medewerkers en vrijwilligers van de Dierenbescherming zetten zich elke dag opnieuw in om dieren te redden, op te vangen en te beschermen. Ze doen dit met liefde, 
       maar kunnen dit alleen blijven doen met de steun van leden, donateurs en gulle gevers. In de week van 27 september tot en met 3 oktober vragen we om steun tijdens de 
       jaarlijkse collecteweek. Vrijwilligers gaan dan met de collectebus langs de deuren voor een bijdrage of collecteren digitaal met een online collectebus.`,
      `In Nederland leven miljoenen dieren. Huisdieren, landbouwdieren en wilde dieren. Deze dieren hebben zelf geen stem en komen daardoor helaas nogal eens in de verdrukking. 
       De Dierenbescherming komt op voor deze dieren. Een aangereden kat, een verwaarloosde hond of een konijn dat achter is gelaten in het park, ze kunnen op onze hulp rekenen.
       Die hulp gaat dag en nacht door, ook in tijden van corona. We zijn onze collectanten daarom extra dankbaar voor hun tijd en inzet en we hopen dat deze inzet wordt beloond.`,
    ],
    image: "news3.jpg",
    bigImage: "news3-big.jpg",
  },
  {
    id: 2,
    date: "23 augustus, 2021",
    author: "Rob Wessels",
    title: "Het gaat goed met Sassy!",
    subtitle: `Hij maakt het goed en iedereen van de dierenkliniek is verliefd op hem. Mini is de eerste dagen met een assistente mee naar huis geweest omdat hij drie keer per dag een 
               verbandwissel nodig had.`,
    content: [
      `Hij maakt het goed en iedereen van de dierenkliniek is verliefd op hem. Mini is de eerste dagen met een assistente mee naar huis geweest omdat hij drie keer per dag een 
       verbandwissel nodig had. Gisteren is hij uit de kliniek 'ontslagen'. Hij logeert nu bij een gastgezin om verder te herstellen en heel erg verwend te worden. Over drie 
       weken volgt een tweede operatie. Het streefbedrag van onze crowdfundactie is bijna behaald. Help jij mee met de laatste loodjes? Alvast heel erg bedankt namens Mini!`,
    ],
    image: "news4.jpg",
    bigImage: "news4-big.jpg",
  },
  {
    id: 1,
    date: "18 juli, 2021",
    author: "Mark Schuurmans",
    title: "ER KOMT WEER EEN OPEN DAG AAN!",
    subtitle: `Ons maandelijks terugkerende open dag komt er weer aan. Houd je agenda vrij op maandag 13 juni tussen 14.00 uur en 17.00 uur.`,
    content: [
      `Op maandag 13 september opent Artemis weer haar deuren weer voor het publiek tijdens de open dag. Het gehele jaar staat in het teken van onze asieldieren, maar 
       eens per jaar is het mogelijk om een kijkje te nemen achter de deuren van onze dierenopvang. Er is een rondleiding die je kunt volgen en voor de kinderen wordt een 
       leuke quiz georganiseerd om zo meer te weten te komen over ons asiel. Zo ontdekken jullie leuke weetjes over de dieren en natuurlijk kunnen de dieren bezichtigd worden.`,
    ],
    image: "news5.jpg",
    bigImage: "news5-big.jpg",
  },
  {
    id: 0,
    date: "3 juni, 2021",
    author: "Remco Evers",
    title: "Gavin zoekt een baasje",
    subtitle: `Na maanden van opereren en revalideren is Gavin eindelijk goedgekeurd door de oorspecialist van het Medisch Centrum voor Dieren in Amsterdam. 
               Gavin mag nu eindelijk een eigen huis gaan zoeken!`,
    content: [
      `Na maanden van opereren en revalideren is Gavin eindelijk goedgekeurd door de oorspecialist van het Medisch Centrum voor Dieren in Amsterdam. 
       Gavin mag nu eindelijk een eigen huis gaan zoeken!`,
      `Celsius is een 3 jaar oude cypers met witte kater. Hij heeft een moeilijke start gehad hier in het asiel waardoor hij niet meteen plaatsbaar was. 
       Hij had in het begin problemen met zijn oor en dit is ondertussen allemaal goed gekomen. Na vier operaties en heel veel liefdevolle verzorging, heeft iedereen 
       bij de SDO ondertussen zijn hart aan Celsius verloren. Toch is het tijd dat hij nu op zoek gaat naar zijn eigen stekkie.`,
    ],
    image: "news6.jpg",
    bigImage: "news6-big.jpg",
  },
];

import Destinations from "./ui/Homepage/Destinations";
import InspirationalArticles from "./ui/Homepage/InspirationalArticles";
import PopularHotels from "./ui/Homepage/PopularHotels";
import Poster from "./ui/Homepage/Poster";

const homeData = {
  poster: {
    title: "Enjoy your dream vacation",
    subtitle:
      "Plan and book our perfect trip with expert advice, travel tips, destination information and  inspiration from us",
    image: {
      src: "https://placehold.co/1280x500/webp",
      alt: "Alt text",
      width: 1240,
      height: 400,
    },
  },
  destinations: [
    {
      title: "Australia",
      subtitle: "2246 properties",
      image: {
        src: "https://placehold.co/295x220/webp",
        alt: "Alt text",
        width: 295,
        height: 220,
      },
    },
    {
      title: "Japan",
      subtitle: "2246 properties",
      image: {
        src: "https://placehold.co/295x220/webp",
        alt: "Alt text",
        width: 295,
        height: 220,
      },
    },
    {
      title: "New Zeeland",
      subtitle: "2246 properties",
      image: {
        src: "https://placehold.co/295x220/webp",
        alt: "Alt text",
        width: 295,
        height: 220,
      },
    },
    {
      title: "Greece",
      subtitle: "2246 properties",
      image: {
        src: "https://placehold.co/295x220/webp",
        alt: "Alt text",
        width: 295,
        height: 220,
      },
    },
  ],
  inspirationalArticles: [
    {
      title: "Sydeny’s 10 most fashionable 5 star hotels",
      subtitle:
        "Browse the fastest growing tourism sector in the heart of Australia tourism capital and discover what the country can offer you",
      image: {
        src: "https://placehold.co/400x280/webp",
        alt: "Alt text",
        width: 400,
        height: 280,
      },
    },
    {
      title: "Top cities for Vegan Travellers",
      subtitle:
        "Top sites where you do not have to worry about being a vegan. Our tourist guide is here and have everything you'll need",
      image: {
        src: "https://placehold.co/400x280/webp",
        alt: "Alt text",
        width: 400,
        height: 280,
      },
    },
    {
      title: "World’s top destinations during and post covid timeline",
      subtitle:
        "Pandemic is still intact and will be here for a longer time. Here’s where your next destination can be and what great adventures awaits you",
      image: {
        src: "https://placehold.co/400x280/webp",
        alt: "Alt text",
        width: 400,
        height: 280,
      },
    },
  ],
  popularHotels: [
    {
      title: "Lakeside Motel Warefront",
      subtitle: "13 available",
      image: {
        src: "https://placehold.co/295x300/webp",
        alt: "Alt text",
        width: 295,
        height: 300,
      },
    },
    {
      title: "Recce Graham resort",
      subtitle: "13 available",
      image: {
        src: "https://placehold.co/295x300/webp",
        alt: "Alt text",
        width: 295,
        height: 300,
      },
    },
    {
      title: "Fireside Dinners",
      subtitle: "13 available",
      image: {
        src: "https://placehold.co/295x300/webp",
        alt: "Alt text",
        width: 295,
        height: 300,
      },
    },
    {
      title: "Oculous Inn Stay",
      subtitle: "13 available",
      image: {
        src: "https://placehold.co/295x300/webp",
        alt: "Alt text",
        width: 295,
        height: 300,
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-screen-xl m-auto mt-6 px-4 lg:px-12">
      <Poster {...homeData.poster} />
      <Destinations className="mt-16" destinations={homeData.destinations} />
      <InspirationalArticles
        className="mt-12"
        inspirationalArticles={homeData.inspirationalArticles}
      />
      <PopularHotels className="mt-12" popularHotels={homeData.popularHotels} />
    </main>
  );
}

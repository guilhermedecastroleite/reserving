import clsx from "clsx";
import Subtitle from "../Typography/Subtitle";
import ImmersiveEditorialCard from "../Cards/ImmersiveEditorialCard";
import type { InspirationalArticleType } from "@/app/types";

interface InspirationalArticlesProps {
  inspirationalArticles: InspirationalArticleType[];
  className?: string;
}

const InspirationalArticles = ({
  inspirationalArticles,
  className,
}: InspirationalArticlesProps) => {
  return (
    <section className={clsx("mt-12", className)}>
      <Subtitle className="text-[1.75rem]">
        Get inspiration for your next trip
      </Subtitle>
      <div
        id="CardsAlbum"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
      >
        {inspirationalArticles.map((article: InspirationalArticleType) => (
          <ImmersiveEditorialCard key={article.title} {...article} />
        ))}
      </div>
    </section>
  );
};

export default InspirationalArticles;

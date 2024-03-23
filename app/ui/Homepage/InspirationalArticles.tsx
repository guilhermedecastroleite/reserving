import clsx from "clsx";
import Subtitle from "../Typography/Subtitle";
import ImmersiveEditorialCard from "../Cards/ImmersiveEditorialCard";
import { InspirationalArticleType } from "@/app/types";

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
      <div id="CardsAlbum" className="flex justify-between mt-8 gap-5">
        {inspirationalArticles.map((article: InspirationalArticleType) => (
          <ImmersiveEditorialCard key={article.title} {...article} />
        ))}
      </div>
    </section>
  );
};

export default InspirationalArticles;

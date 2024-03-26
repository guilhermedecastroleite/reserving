import { fetchHotelList } from "@/app/lib/data";
import SearchResultsCard from "../Cards/SearchResultsCard";
import SearchResultsHeader from "./SearchResultsHeader";
import { randomUUID } from "crypto";

interface ResultsContainerProps {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export const ResultsContainerSkeleton = () => {
  return (
    <div role="status" className="animate-pulse col-span-1 lg:col-span-6">
      <div className="h-7 w-[50%] rounded-md bg-zinc-300" />
      <div className="flex flex-row flex-wrap sm:justify-between items-center mt-6 gap-4">
        <div className="h-12 w-[60%] rounded-md bg-zinc-300" />
        <div className="h-12 w-[30%] rounded-md bg-zinc-300" />
      </div>
      {...[
        Array(5).fill(
          <div
            key={randomUUID()}
            className="mt-4 h-56 w-full rounded-md bg-zinc-300"
          />
        ),
      ]}
    </div>
  );
};

const ResultsContainer = async ({ searchParams }: ResultsContainerProps) => {
  const results = await fetchHotelList(searchParams);

  return (
    <div id="SerachResultsContainer" className="col-span-1 lg:col-span-6">
      <SearchResultsHeader
        location="Melbourne"
        amountResults={results.length}
      />
      <div className="flex flex-col gap-6 mt-7">
        {results.map((item) => (
          <SearchResultsCard key={item.hotel_id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ResultsContainer;

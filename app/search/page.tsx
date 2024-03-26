import { Suspense } from "react";
import SearchForm from "../ui/Homepage/SearchForm";
import ResultsContainer, {
  ResultsContainerSkeleton,
} from "../ui/Search/ResultsContainer";
import SideFilters from "../ui/Search/SideFilters";

interface SearchProps {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

const Search = ({ searchParams }: SearchProps) => {
  return (
    <h1 className="flex flex-col max-w-screen-xl m-auto mt-6 px-4 lg:px-12">
      <SearchForm className="max-w-[90%] m-auto mt-[5.5rem]" />
      <div
        id="SearchPageContent"
        className="grid grid-cols-1 lg:grid-cols-8 gap-8 mt-16"
      >
        <SideFilters className="col-span-1 lg:col-span-2" />
        <Suspense fallback={<ResultsContainerSkeleton />}>
          <ResultsContainer searchParams={searchParams} />
        </Suspense>
      </div>
    </h1>
  );
};

export default Search;

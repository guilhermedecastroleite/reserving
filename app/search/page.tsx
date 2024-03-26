import { fetchHotelList } from "../lib/data";
import SearchResultsCard from "../ui/Cards/SearchResultsCard";
import SearchForm from "../ui/Homepage/SearchForm";
import SearchResultsHeader from "../ui/Search/SearchResultsHeader";
import SideFilters from "../ui/Search/SideFilters";

interface SearchProps {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

const Search = async ({ searchParams }: SearchProps) => {
  const results = await fetchHotelList(searchParams);

  return (
    <h1 className="flex flex-col max-w-screen-xl m-auto mt-6 px-4 lg:px-12">
      <SearchForm className="max-w-[90%] m-auto mt-[5.5rem]" />
      <div
        id="SearchPageContent"
        className="grid grid-cols-1 lg:grid-cols-8 gap-8 mt-16"
      >
        <SideFilters className="col-span-1 lg:col-span-2" />
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
      </div>
    </h1>
  );
};

export default Search;

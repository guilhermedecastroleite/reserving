import SearchResultsCard from "../ui/Cards/SearchResultsCard";
import SearchForm from "../ui/Homepage/SearchForm";
import SearchResultsHeader from "../ui/Search/SearchResultsHeader";
import SideFilters from "../ui/Search/SideFilters";

const results = [...Array(10)].fill({
  id: "lakeside-motel-warefront",
  name: "Lakeside Motel Warefront",
  rating: {
    rating: 4.5,
    amountReviews: 1200,
  },
  description:
    "Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free private parking is available on site.",
  price: {
    original: 150,
    discounted: 130,
    discount: 0.05,
    formatted: "$130",
    original_formatted: "$150",
    currency: "$",
  },
  promotion: "book-now" as const,
});

const Search = () => {
  return (
    <h1 className="flex flex-col max-w-screen-xl m-auto mt-6 px-4 lg:px-12">
      <SearchForm className="max-w-[90%] m-auto" />
      <div
        id="SearchPageContent"
        className="grid grid-cols-1 lg:grid-cols-8 gap-8 mt-28"
      >
        <SideFilters className="col-span-1 lg:col-span-2" />
        <div id="SerachResultsContainer" className="col-span-1 lg:col-span-6">
          <SearchResultsHeader location="Melbourne" amountResults={2582} />
          <div className="flex flex-col gap-6 mt-7">
            {results.map((item) => (
              <SearchResultsCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </h1>
  );
};

export default Search;

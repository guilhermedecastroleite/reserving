import clsx from "clsx";
import CategoriesSelector from "./CategoriesSelector";
import SortSelector from "./SortSelector";
import CategoriesSelectorMobile from "./CategoriesSelectorMobile";

interface SearchResultsHeaderProps {
  location: string;
  amountResults: number;
  className?: string;
}

const SearchResultsHeader = ({
  location,
  amountResults,
  className,
}: SearchResultsHeaderProps) => {
  return (
    <div className={clsx(className)}>
      <h1 className="text-lg font-semibold text-text-medium">
        {`${location}: ${amountResults} search results found`}
      </h1>
      <div
        id="SearchSelectors"
        className="flex flex-row flex-wrap sm:justify-between items-center mt-6 gap-4"
      >
        <CategoriesSelector className="hidden sm:flex" />
        <CategoriesSelectorMobile className="sm:hidden w-full" />
        <SortSelector className="w-full sm:w-fit" />
      </div>
    </div>
  );
};

export default SearchResultsHeader;

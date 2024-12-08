import { useState } from "react";

interface FilterProps {
  onFilter: (newValue: string) => void;
}

const FilterBooks = ({ onFilter }: FilterProps) => {
  const [selectedSort, setSelectedSort] = useState<string | number>("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const filterValue = event.target.value;
    setSelectedSort(filterValue);
    onFilter(filterValue);
  };
  return (
    <div className="flex items-stretch space-x-3">
      <select
        className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
        name="sortBy"
        id="sortBy"
        value={selectedSort}
        onChange={handleFilterChange}
      >
        <option value="">Filter or Sort Search</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="price_asc">💲Price (Low-High)</option>
        <option value="price_desc">💲Price (High-Low)</option>
        <option value="year_asc">Publication Year (Oldest)</option>
        <option value="year_desc">Publication Year (Newest)</option>
      </select>
    </div>
  );
};

export default FilterBooks;

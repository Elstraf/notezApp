import { useCopyNoteStore } from "../../store";

import { FaSearch } from "react-icons/fa";

const Search = () => {
  const setSearchQuery = useCopyNoteStore((state) => state.setSearchQuery);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="relative">
        <input
          className="w-[180px] h-10 rounded-3xl font-bold text-[16px] placeholder:text-[16px] pl-9"
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Search"
        />
        <FaSearch className="absolute inset-y-0 flex justify-center h-full left-3" />
      </div>
    </>
  );
};

export default Search;

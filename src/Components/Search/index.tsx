import { useCopyNoteStore } from "../../store";

const Search = () => {
  const setSearchQuery = useCopyNoteStore((state) => state.setSearchQuery);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Search"
      />
    </>
  );
};

export default Search;

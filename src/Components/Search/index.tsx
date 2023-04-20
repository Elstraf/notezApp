import { useNoteStore } from "../../store";

const Search = () => {
  const filter = useNoteStore((state) => state.filterNotes);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filter(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} placeholder="Search" />
    </>
  );
};

export default Search;

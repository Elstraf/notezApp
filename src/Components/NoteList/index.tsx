import { useEffect } from "react";
import { useCopyNoteStore, useNoteStore } from "../../store";
import NoteCard from "../NoteCard";

interface NoteListProps {
  smallList?: boolean;
}

const NoteList = ({ smallList }: NoteListProps) => {
  const notes = useNoteStore((state) => state.notes);

  const query = useCopyNoteStore((state) => state.searchQuery);

  const clearQuery = useCopyNoteStore((state) => state.clearSearchQuery);

  useEffect(() => {
    return () => clearQuery();
  }, []);

  if (notes.length === 0) {
    return (
      <div className="flex h-[300px] justify-center items-center">
        <h1 className="text-2xl font-bold">
          No Notes Found! How about making your first one!
        </h1>
      </div>
    );
  }

  if (query) {
    const filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
    );
    return (
      <div className={`md:relative md:-mt-16 ${smallList ? " md:-mt-32" : ""}`}>
        {smallList && <h3 className=" text-2xl font-bold mb-7">Saved notes</h3>}
        <div
          className={`${
            smallList
              ? " flex gap-8 flex-wrap"
              : "grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:justify-items-start  justify-items-center  gap-y-4"
          }`}
        >
          {filteredNotes.length >= 1 &&
            filteredNotes.map((note, id) => (
              <div key={id}>
                <NoteCard
                  title={note.title}
                  id={note.uuid}
                  body={note.body}
                  date={note.date}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  if (smallList) {
    return (
      <div className="md:relative md:-mt-32">
        <h3 className=" text-2xl font-bold mb-7">Saved notes</h3>
        <div className="flex gap-8 flex-wrap overflow-scroll max-h-[500px]">
          {notes.length >= 1 &&
            notes.map((note, id) => (
              <div key={id}>
                <NoteCard
                  title={note.title}
                  id={note.uuid}
                  body={note.body}
                  date={note.date}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="md:relative md:-mt-16 pt-4 sm:p-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:justify-items-start  justify-items-center  gap-y-4">
        {notes.length >= 1 &&
          notes.map((note, id) => (
            <div key={id}>
              <NoteCard
                title={note.title}
                id={note.uuid}
                body={note.body}
                date={note.date}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NoteList;

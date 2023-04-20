import { useNoteStore } from "../../store";
import NoteCard from "../NoteCard";

interface NoteListProps {
  smallList?: boolean;
}

const NoteList = ({ smallList }: NoteListProps) => {
  const notes = useNoteStore((state) => state.notes);

  console.log("Notes", notes);

  if (smallList) {
    return (
      <div className="md:relative md:-mt-32">
        <h3 className=" text-2xl font-bold mb-7">Saved notes</h3>
        <div className="flex gap-8 justify-between flex-wrap">
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
    <div className="md:relative md:-mt-16">
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

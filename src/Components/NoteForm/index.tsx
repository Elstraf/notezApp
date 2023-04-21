import { useEffect, useState } from "react";
import { useNoteStore } from "../../store";
import Button from "../Button";
import styles from "./index.module.css";

export interface NoteState {
  title: string;
  body: string;
  date: string;
  uuid: string;
}

interface NoteFormProps {
  selectedNote?: NoteState;
  id?: string;
}

const defaultNoteState: NoteState = {
  title: "",
  body: "",
  date: "",
  uuid: "",
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getDaySuffix = (day: number) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const NoteForm = ({ selectedNote, id }: NoteFormProps) => {
  const [note, SetNote] = useState<NoteState>(defaultNoteState);

  const updateNote = useNoteStore((state) => state.updateNote);

  useEffect(() => {
    if (selectedNote) {
      SetNote((prev) => ({ ...prev, ...selectedNote }));
    }
  }, [selectedNote]);

  const saveNote = useNoteStore((state) => state.addNote);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!selectedNote) {
      const date = new Date();
      const dayOfMonth = date.getDate();
      const daySuffix = getDaySuffix(dayOfMonth);
      const dayOfWeek = daysOfWeek[date.getDay()];
      const monthOfYear = monthsOfYear[date.getMonth()];
      const year = date.getFullYear();

      const noteDate = `${dayOfWeek} ${dayOfMonth}${daySuffix} ${monthOfYear} ${year}`;

      note["date"] = noteDate;

      note["uuid"] = Math.random().toString(36).substring(2, 15);

      saveNote(note);
    }

    if (typeof id === "string") {
      updateNote(id, note);
    }

    SetNote(defaultNoteState);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    SetNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className=" relative z-10 md:-mt-32 pt-4 sm:pt-0">
      <div className="flex flex-col">
        <form className={`flex flex-col ${styles.form}`}>
          <div className="flex items-baseline flex-col lg:flex-row overflow-hidden">
            <input
              className=" text-2xl text-black placeholder:text-black mb-7 bg-transparent font-bold"
              type="text"
              placeholder="New note"
              name="title"
              value={note.title}
              onChange={(e) => handleChange(e)}
            />
            {note.date !== "" && (
              <p className="text-2xl text-black placeholder:text-black mb-7 bg-transparent font-bold">{`- Created ${note.date}`}</p>
            )}
          </div>
          <textarea
            placeholder="Start typing here..."
            rows={14}
            className=" shadow-md rounded-xl p-8 resize-none drop-shadow-md "
            name="body"
            value={note.body}
            onChange={(e) => handleChange(e)}
          />
        </form>
        <div className="flex gap-4 sm:self-end mt-8">
          <button
            onClick={(e) => handleSubmit(e)}
            className="p-2 bg-yellow h-10 rounded-3xl font-bold text-lg hover:text-yellow hover:bg-black transition-all duration-300  w-[142px] text-[14px]"
          >
            {selectedNote ? "Save" : "Submit"}
          </button>
          <Button
            text="Cancel"
            onClick={() => {
              selectedNote ? SetNote(selectedNote) : SetNote(defaultNoteState);
            }}
            small
            classes="bg-grey text-white text-[14px]"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteForm;

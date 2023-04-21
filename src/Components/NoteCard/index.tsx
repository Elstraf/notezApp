import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTrashAlt } from "react-icons/fa";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { useNoteStore } from "../../store";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NoteCardProps {
  id: string;
  title: string;
  body: string;
  date: string;
}

interface DeleteModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteNote: (id: string) => void;
  id: string;
}

const DeleteModal = ({ setOpen, deleteNote, id }: DeleteModalProps) => {
  return (
    <div className="absolute h-full w-full bg-yellow flex flex-col text-center p-4">
      <div>
        <h4 className=" text-lg font-bold">
          Are you sure you want to delete this note?
        </h4>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <button
          onClick={() => {
            deleteNote(id);
            setOpen(false);
          }}
          className="bg-white rounded-3xl w-[133px] h-[26px] mx-auto font-bold text-xs hover:text-yellow hover:bg-black transition-all duration-300"
        >
          Yes
        </button>
        <button
          onClick={() => setOpen(false)}
          className="bg-lightGrey rounded-3xl w-[133px] h-[26px] mx-auto font-bold text-xs hover:text-yellow hover:bg-black transition-all duration-300"
        >
          No
        </button>
      </div>
    </div>
  );
};

const NoteCard = ({ id, title, body, date }: NoteCardProps) => {
  const deleteNote = useNoteStore((state) => state.deleteNote);

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col shadow-noteCard h-noteCard w-noteCard rounded-2xl bg-white relative">
      <div className="flex basis-14  justify-end items-center gap-1 pt-2 pr-4">
        <Link to={`/edit/${id}`}>
          <FontAwesomeIcon
            className="text-grey hover:text-yellow transition-all duration-300 cursor-pointer"
            icon={faUpRightAndDownLeftFromCenter}
          />
        </Link>

        <FaTrashAlt
          onClick={() => {
            setOpen(true);
          }}
          className="text-grey hover:text-yellow transition-all duration-300 cursor-pointer"
        />
      </div>
      <div className="font-bold text-lg mb-2 px-4">{title}</div>
      <div className="flex-1 text-sm text-grey px-4">
        {/* <p className="line-clamp-3 leading-[17px]">{body}</p> */}
        <textarea
          value={body}
          className="h-auto line-clamp-3 w-full resize-none disabled:bg-white mb-2"
          readOnly
          disabled
          rows={3}
        />
      </div>
      <div className=" text-[10px] text-grey px-4 pb-1">{date}</div>

      {open && (
        <DeleteModal setOpen={setOpen} deleteNote={deleteNote} id={id} />
      )}
    </div>
  );
};

export default NoteCard;

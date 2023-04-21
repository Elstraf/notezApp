import { useParams } from "react-router-dom";
import Container from "../../Components/Container";
import Header from "../../Components/Header";
import NoteForm from "../../Components/NoteForm";
import NoteList from "../../Components/NoteList";
import { useNoteStore } from "../../store";

const Edit = () => {
  let { id } = useParams<{ id: string }>();

  const selectedNote = useNoteStore((state) => state.notes).filter(
    (note) => note.uuid === id
  );

  return (
    <>
      <Header />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <NoteList smallList />
          </div>
          <div className="order-1">
            <NoteForm selectedNote={selectedNote[0]} id={id} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Edit;

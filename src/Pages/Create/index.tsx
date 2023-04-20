import Container from "../../Components/Container";
import Header from "../../Components/Header";
import NoteForm from "../../Components/NoteForm";
import NoteList from "../../Components/NoteList";

const Create = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="grid grid-cols-2 gap-8 ">
          <NoteList smallList />
          <NoteForm />
        </div>
      </Container>
    </>
  );
};

export default Create;

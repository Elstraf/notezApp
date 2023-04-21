import Container from "../../Components/Container";
import Header from "../../Components/Header";
import NoteForm from "../../Components/NoteForm";
import NoteList from "../../Components/NoteList";

const Create = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="order-2 md:order-1">
            <NoteList smallList />
          </div>
          <div className="order-1">
            <NoteForm />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Create;

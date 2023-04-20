import Container from "../../Components/Container";
import Header from "../../Components/Header";
import NoteList from "../../Components/NoteList";

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <NoteList />
      </Container>
    </div>
  );
};

export default Home;

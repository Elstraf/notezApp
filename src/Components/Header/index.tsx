import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";
import Search from "../Search";

const Header = () => {
  return (
    <div className="bg-yellow md:h-hero relative">
      <Container>
        <div className="flex  h-32 justify-between items-center">
          <Link to={"/create"}>
            <Button text="New Note" onClick={() => {}} classes="bg-white" />
          </Link>
          <Link to={"/"}>
            <h1 className=" text-[55px] font-bold">notez</h1>
          </Link>

          <Search />
        </div>
      </Container>
    </div>
  );
};

export default Header;

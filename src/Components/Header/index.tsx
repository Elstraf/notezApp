import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";
import Search from "../Search";

const Header = () => {
  return (
    <>
      <div className="bg-yellow md:h-hero h-[210px] relative">
        <Container>
          <div className="flex flex-col sm:flex-row  h-32 justify-between items-center pt-4 gap-2 sm:gap-0">
            <Link to={"/create"}>
              <Button text="New Note" onClick={() => {}} classes="bg-white" />
            </Link>
            <Link to={"/"} className="order-first sm:order-2">
              <h1 className=" text-[55px] font-bold">notez</h1>
            </Link>
            <div className="sm:order-last">
              <Search />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;

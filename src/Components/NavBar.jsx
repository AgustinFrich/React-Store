import { CartDropDown } from "./CartDropDown";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="row">
      <div className="col-xs-9">
        <SearchBar />
      </div>
      <div className="col-xs-3">
        <CartDropDown />
      </div>
    </div>
  );
};

export default NavBar;

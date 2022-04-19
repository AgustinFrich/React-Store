import "./Styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <label>
        <input className="SearchBar-Input"></input>
        <button className="SearchBar-Button">Search</button>
      </label>
    </div>
  );
};

export default SearchBar;

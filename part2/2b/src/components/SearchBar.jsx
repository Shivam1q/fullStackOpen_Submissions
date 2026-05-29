const SearchBar = (props) => {
  return (
    <div>
      filter shown with{" "}
      <input value={props.searchInput} onChange={props.handleSearch} />
    </div>
  );
};

export default SearchBar;

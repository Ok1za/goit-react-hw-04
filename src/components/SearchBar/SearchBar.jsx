import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === "") {
      toast.error('This is an error!');
      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
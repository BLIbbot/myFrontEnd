export const Filter = ({ searchParams, setSearchParams }) => {
  const handleFilterChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", e.target.value);
    setSearchParams(newParams);
  };

  const handleOrderChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", e.target.value);
    setSearchParams(newParams);
  };

  return (
    <>
      <label>
        Sort By:
        <select onChange={handleFilterChange}>
          <option value="created_at">Date</option>
          <option value="comments_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label>
        <input
          onChange={handleOrderChange}
          type="radio"
          name="order"
          value="ASC"
        />
        Ascending
      </label>
      <label>
        <input
          onChange={handleOrderChange}
          defaultChecked
          type="radio"
          name="order"
          value="DESC"
        />
        Descending
      </label>
    </>
  );
};

function Categories({ items, changeCurrentJob }) {
  return (
    <span>
      {items.map((single, index) => (
        <button onClick={() => changeCurrentJob(index)}>
          {single.company}
        </button>
      ))}
    </span>
  );
}

export default Categories;

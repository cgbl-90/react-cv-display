function Jobs({ items }) {
  return (
    <div>
      <h4>{items.date}</h4>
      <h3>
        {items.job} at {items.company}{" "}
        <span className="badge">{items.industry}</span>
      </h3>
      <p>{items.company_desc}</p>
      <ul>
        {items.description.map((resp) => (
          <li className="symb">{resp}</li>
        ))}
      </ul>
      <ul>
        {items.keywords.map((resp) => (
          <li className="badge">{resp}</li>
        ))}
      </ul>
    </div>
  );
}

export default Jobs;

import data from "../db/manga.json";

const MangaPage = () => {
  return (
    <div>
      <ul>
        {data.map(({ id, title, overview, type }) => (
          <li key={id}>
            <p>{title}</p>
            <p>{overview}</p>
            <p>{type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MangaPage;

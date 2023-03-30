// import data from "../db/manga.json";
let data = [
  {
    title: "My Succubus Girlfriend",
    overview: "My Succubus Girlfriend blebleknfksndlfnlklk",
    type: "type",
  },
  {
    title: "Meme Girls",
    overview: "Meme Girls hfljsdhfkhsdlghsdlkhglsdgldlhj",
    type: "type",
  },
];

const MangaPage = () => {
  return (
    <div>
      <ul>
        {data.map(({ title, overview, type }) => (
          <li key="123123">
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

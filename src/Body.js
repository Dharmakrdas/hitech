import AppText from "./utils/app-text";
import SongsCard from "./SongCard";
import useSongList from "./hooks/useSongList";
const Body = () => {
//   console.log(list);
  const result = useSongList();
  console.log(result?.results);
  

  return (
    <div className="w-3/4 m-auto">
      <p className="font-serif text-xl mt-7">{AppText.latest}</p>
      <div className="movies">
        {result?.results.map((item) => (
          <div key={item.id}  >
            < SongsCard data={item} />
          </div>
        ))}
      </div>
      <p className="font-serif text-xl mt-7">{AppText.top}</p>
      <div className="movies">
        {result?.results.map((item) => (
          <div key={item.id}  >
            < SongsCard data={item} />
          </div>
        ))}
      </div>
      <p className="font-serif text-xl">{AppText.hard_mix}</p>
      <div className="movies">
        {result?.results.map((item) => (
          <div key={item.id}  >
            < SongsCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

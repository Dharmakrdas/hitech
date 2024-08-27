import AppText from "./utils/app-text";
import SongsCard from "./SongCard";
import useSongList from "./hooks/useSongList";


const Body = () => {
  const result = useSongList();
  console.log(result);
  

  return result.length === 0 ? <h1>Loafing ...</h1> : (
    <div className="w-3/4 m-auto">
      <p className="font-serif text-xl mt-7">{AppText.latest}</p>
      <div className="movies">
        { result &&  (result.map((item) => (
          <div key={item.id}  >
            < SongsCard data={item} />
          </div>
        )))} 
      </div>

      <p className="font-serif text-xl mt-7">{AppText.top}</p>
      <div className="movies">
        { result &&  (result.map((item) => (
          <div key={item.id}  >
            < SongsCard data={item} />
          </div>
        )))} 
      </div>

      <p className="font-serif text-xl mt-7">{AppText.hard_mix}</p>
      <div className="movies">
        { result &&  (result.map((item) => (
          <div key={item.id}  >
            < SongsCard data={item} />
          </div>
        )))} 
      </div>
    </div>
  );
};

export default Body;

import AppText from "./utils/app-text";
import SongsCard from "./SongCard";
import useSongList from "./hooks/useSongList";
import ImageSlider from "./ImageSlider";
import sliders from './mocks/image-slider-mock.json'


const Body = () => {
  const result = useSongList();
  console.log(result);
  

  return result.length === 0 ? <h1>Loading ...</h1> : (
    <div>
      <ImageSlider data={sliders?.products} />
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

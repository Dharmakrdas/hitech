// import AppText from "./utils/app-text";
// import SongsCard from "./SongCard";
// import useSongList from "./hooks/useSongList";
// import ImageSlider from "./ImageSlider";
// import sliders from './mocks/image-slider-mock.json'

import SearchInput from "./SearchInput";
import Songs from "./Songs";
import songsList from "../src/mocks/songs-list.mock.json";
import Footer from "./Footer";
const Body = () => {
  return (
    <div className="body-view">
      <SearchInput />
      <div>Good Evening, Dharam.</div>
      <div className="latest-view">
        <p className=" font-bold">Latest Songs</p>
        <div className="flex overflow-x-auto whitespace-nowrap horizontal-scroll">
          {songsList.data.map((songs) => (
            <Songs details={songs} />
          ))}
        </div>
      </div>
      <div className="latest-view">
        <p className=" font-bold">Treding Songs</p>
        <div className="flex overflow-x-auto whitespace-nowrap horizontal-scroll">
          {songsList.data.map((songs) => (
            <Songs details={songs} />
          ))}
        </div>
      </div>
      <div className="latest-view">
        <p className=" font-bold">Old Songs</p>
        <div className="flex overflow-x-auto whitespace-nowrap horizontal-scroll">
          {songsList.data.map((songs) => (
            <Songs details={songs} />
          ))}
        </div>
      </div>
      <div className="latest-view">
        <p className=" font-bold">Devotional Songs</p>
        <div className="flex overflow-x-auto whitespace-nowrap horizontal-scroll">
          {songsList.data.map((songs) => (
            <Songs details={songs} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;

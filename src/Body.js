// import AppText from "./utils/app-text";
// import SongsCard from "./SongCard";
// import useSongList from "./hooks/useSongList";
// import ImageSlider from "./ImageSlider";
// import sliders from './mocks/image-slider-mock.json'

const Body = () => {
  return (
    <div className="body-view">
      <div className="seach-input-container">
        <input
          className="seach-view"
          type="text"
          placeholder="Seach Songs"
        ></input>
        <img
          src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
          alt="seach-logo"
          className="seach-icon"
        ></img>
      </div>
      <div className="latest-view">
        <p>Latest songs</p>
      </div>
      <div className="latest-view">
        <p>Category songs</p>
      </div>
      <div className="latest-view">
        <p>Services</p>
      </div>
    </div>
  );
};

export default Body;

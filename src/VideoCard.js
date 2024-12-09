import Songs from "./Songs";
import VideoPlayer from "./VideoPlayer";
import songsList from "../src/mocks/songs-list.mock.json";

const VideoCard = () => {
  const VideoDetails = () => {
    return (
      <div>
        <h1 className=" font-bold text-lg text-black mt-10 mb-10">
          Dj Song New√√Aaj ki Raat Dj Remix | Tamanna Bhatia Song
        </h1>
        <p className=" text-lg text-black mt-2 mb-2">Stree 2 Dj Song </p>
        <p className=" text-lg text-black mt-2 mb-2">Aaj Ki Rat Dj Song </p>
        <p className=" text-lg text-black mt-2 mb-2">Year 2024</p>
        <div className="latest-view">
          <p className=" font-bold">Recomendation Songs</p>
          <div className="flex overflow-x-auto whitespace-nowrap horizontal-scroll">
            {songsList.data.map((songs) => (
              <Songs details={songs} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <VideoPlayer />
      <VideoDetails />
    </div>
  );
};

export default VideoCard;

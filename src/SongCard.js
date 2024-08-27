import { MoviesImagUrl } from "./constant";

const SongsCard = ({data}) => {
  return (
    <div className="top-resturent-card">
      <div className="image">
        <img
          className="top-product-img"
          alt="product-img"
        //   src={data?.thumbnail}
          src={MoviesImagUrl(data?.poster_path)}
        />
        <div className="image__text">{data.title}</div>
      </div>
    </div>
  );
};

export default SongsCard;

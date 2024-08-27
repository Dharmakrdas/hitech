import { useEffect, useState } from "react";
import { options, url } from "../constant";

const useSongList = () => {
    const [list, setList] = useState([]);
  useEffect(() => {
    getNowPlayMovies();
  }, []);

  const getNowPlayMovies = async () => {
    const movies = await fetch(url, options);
    const res = await movies.json();
    // console.log(res.results);
    setList(res)
  };
  return list;
};

export default useSongList;

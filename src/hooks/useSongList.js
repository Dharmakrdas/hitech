import { useEffect, useState } from "react";
import { options, url } from "../constant";

const useSongList = () => {
    const [list, setList] = useState([]);
  useEffect(() => {
    getNowPlayMovies();
  }, []);

  const getNowPlayMovies = async () => {
   try{
    const movies = await fetch(url, options);
    const res = await movies.json();
    // console.log(res.results);
    setList(res?.results)
   }
   catch{
    return list
   }
  }

  return list;
};

export default useSongList;

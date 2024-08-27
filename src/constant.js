export const APP_LOGO =
  "https://static.vecteezy.com/system/resources/thumbnails/015/658/449/small/earphones-icon-doodle-png.png";
export const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const TailerUrl = (movies_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movies_id}/videos?language=en-US`;
  return url;
};

export const MoviesImagUrl = (poster_id) => {
  const url = `https://image.tmdb.org/t/p/original/${poster_id}`;
  return url;
};

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzI2MzNhNmY4ZWU1YzkyMDQxZDI1OWQ3MGQ5YzQzYSIsInN1YiI6IjY1ZjQxYTU1YTY5OGNmMDE4NmY3M2IyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UV_2uoqHvuwgIDR7wq6nMPU-baTa1rJho9NE6_r4CnE",
  },
};

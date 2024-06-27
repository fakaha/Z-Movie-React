import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovieDataQueryDetail } from "../services/movie/get-data-movie-detail";

export const DetailMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const { data: detailPaijo } = useMovieDataQueryDetail({
    id: id,
  });

  return (
    <div className="h-screen">
      <div
        className=" relative flex flex-col items-center justify-center bg-no-repeat w-screen h-full bg-cover bg-blend-soft-light bg-gray-700 bg-opacity"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${detailPaijo?.backdrop_path})`,
        }}
      >
        <button onClick={() => navigate('/')} className="absolute top-3 left-3 w-20 px-3 py-1 rounded-3xl bg-red-600 text-white">Back</button>

        <div className="flex flex-col items-center md:flex-row gap-3 w-3/4 md:w-1/2">
          <img
            className="h-40 w-36 md:w-auto md:h-80"
            src={`https://image.tmdb.org/t/p/original${detailPaijo?.poster_path}`}
            alt=""
          />
          <div className="desc text-white">
            <h1 className="font-bold text-2xl md:text-4xl my-3">{detailPaijo?.title}</h1>
            <div className="genres flex flex-wrap gap-1 md:gap-4 my-3">
              {detailPaijo?.genres.map((dataGenres, index) => (
                <p
                  className="border-2 rounded-2xl px-2 py-1 font-normal md:font-medium"
                  key={index}
                >
                  {dataGenres.name}
                </p>
              ))}
            </div>
            <p className="my-3">{detailPaijo?.overview}</p>
            <p>Rating : {detailPaijo?.vote_average.toFixed(2)} / 10</p>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col py-3">
        <p className="font-bold text-2xl my-14">TRAILER</p>

        <div className="flex flex-wrap justify-center gap-5 w-3/4 md:w-auto">
          {detailPaijo?.videos?.results?.map((video) => (
            <iframe
              loading="lazy"
              key={video.key}
              width="420"
              height="315"
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};

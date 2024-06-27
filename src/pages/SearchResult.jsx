import React from "react";
import { useLocation } from "react-router-dom";
import { useMovieDataSearchQuery } from "../services/movie/get-data-movie-search";
import { RenderDataSearch } from "../assets/components/renderDataSearch/RenderDataSearch";
import { Navbar } from "../assets/components/Navbar";

export const SearchResult = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");


  const { data: search } = useMovieDataSearchQuery({
    query: query,
  });
  
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap w-full px-4 box-border">
        {search &&
          search.results.map((dataAll, index) => {
            return <RenderDataSearch key={index} dataParent={dataAll} />;
          })}
      </div>
    </div>
  );
};

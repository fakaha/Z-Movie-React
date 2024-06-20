import React, { useState } from "react";
// import axios from "axios";
import { RenderDataList } from "../assets/components/renderDataList/RenderDataList";
import {
  fetchDataMovie,
  useMovieDataQuery,
} from "../services/movie/get-data-movie";
import { useMovieDataQueryDetail } from "../services/movie/get-data-movie-detail";

export const HomePage = () => {
  // const [movieData, setMovieData] = useState([]);
  // const [page, setPage] = useState('')
  const [pageNow, setPageNow] = useState(1);

  // const {data: fetchUser, refetch: loadUlang} = useMovieDataQuery(pageNow);
  const { data: paijoSalto } = useMovieDataQuery({
    language: "en-US",
    page: pageNow,
  });
  console.log(paijoSalto, "data dinamis");

  const { data: detailPaijo } = useMovieDataQueryDetail({
    id: "980489",
  });
  console.log(detailPaijo, "data detail dinamis");
  // CARA 2
  // const options = {
  //   method: "GET",
  //   url: `${process.env.REACT_APP_SERVER}3/movie/now_playing?language=en-US&page=99`,
  //   params: { language: "en-US", page: "1" },
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       `Bearer ${process.env.REACT_APP_KEY}`,
  //   },
  // };

  // CARA 1
  // const getDataPopular = () => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       setMovieData(response.data.results);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  // const getDataMovie = async () => {
  //   const data = await fetchDataMovie()
  //   console.log(data, 'data movie home');
  //   setMovieData(data.results)
  // }

  // useEffect(() => {
  //   getDataMovie();
  // }, []);

  return (
    // <div className="bg-[#040100] h-screen text-white flex flex-col gap-10">
    //   <nav className="flex justify-between bg-white px-6">
    //     <h1 className="text-4xl text-black bg-white text-start py-3">
    //       Z-Movie
    //     </h1>
    //     <div className="searchBar flex items-center gap-5">
    //       <input type="text" className="border rounded-md border-black text-black px-1"/>
    //       <button className="text-black" >Search</button>
    //     </div>
    //   </nav>
    //   <p>{pageNow}</p>
    //   <button onClick={() => setPageNow(pageNow + 1)}>+</button>

    //   <div className="flex w-100 flex-wrap justify-center bg-black px-6">
    //     {movieData.map((dataMovieList, index) => {
    //       return <RenderDataList key={index} dataParent={dataMovieList} />;
    //     })}
    //   </div>
    // </div>

    <div className="relative">
      <div className="flex gap-3 justify-center py-5">
        <button
          className="bg-red-600 w-20 text-white rounded-xl"
          onClick={() => {
            pageNow !== 1 ? setPageNow(pageNow - 1) : setPageNow(pageNow);
          }}
        >
          Previous
        </button>
        <h1 className="font-semibold">{pageNow}</h1>
        <button
          className="bg-red-600 w-20 text-white rounded-xl"
          onClick={() => {
            setPageNow(pageNow + 1);
          }}
        >
          Next
        </button>
      </div>

      <div className="flex flex-wrap w-full px-4 box-border">
        {paijoSalto &&
          paijoSalto.results.map((dataAll, index) => {
            return <RenderDataList key={index} dataParent={dataAll} />;
          })}
      </div>
    </div>
  );
};

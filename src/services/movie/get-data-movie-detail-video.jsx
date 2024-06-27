import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

// setingan pertama untuk hit API
// const fetchDataMovie = async (page) => {
const fetchDataMovieDetailVideo = async ({queryKey}) => {
    //v3
    // const { data } = await http.get(`${API_ENDPOINT.NOW_PLAYING}?page=${page ? page :1}`)
    // return data
    //v4
    const [_key, _params] = queryKey;
    const { data } = await http.get(_key + _params.id );
    console.log(data, 'data');
    return data    
}

// const useMovieDataQuery = (page) => {
const useMovieDataQueryDetailVideo = (options) => {
    // v3
    // return useQuery(["userData", page], () => fetchDataMovie(page))
    //v4
    // KETIKA OPTIONS BERUBAH, AKAN MENJALANKAN FETCHDATAMOVIE
    return useQuery([API_ENDPOINT.DETAIL_VIDEOS, options], fetchDataMovieDetailVideo)
    }

export {fetchDataMovieDetailVideo, useMovieDataQueryDetailVideo}
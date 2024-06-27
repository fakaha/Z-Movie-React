import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

// setingan pertama untuk hit API
const fetchDataMovieSearch = async ({queryKey}) => {
    const [_key, _params] = queryKey;    
    const { data } = await http.get(_key, { params: _params });
    return data    
}

const useMovieDataSearchQuery = (options) => {
    return useQuery([API_ENDPOINT.DETAIL_MOVIE_SEARCH, options], fetchDataMovieSearch)
    }

export {fetchDataMovieSearch, useMovieDataSearchQuery}
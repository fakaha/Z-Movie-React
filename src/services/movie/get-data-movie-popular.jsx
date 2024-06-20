import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const fetchDataMoviePopular = async (page) =>{
    // untuk handle API
    const {data} = await http.get(`${API_ENDPOINT.NOW_POPULAR}?page=${page ? page : 1}`)    
    return data
}

// untuk dinamis handle
const useMovieDataPopularQuery = (page) =>{
    return useQuery({
        queryKey: ["userDataMoviePopular", page],
        queryFn: () => fetchDataMoviePopular(page),
    });
};

export {fetchDataMoviePopular, useMovieDataPopularQuery}
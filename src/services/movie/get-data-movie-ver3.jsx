import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const fetchDataVer3 = async (page) => {
  v3;
  const { data } = await http.get(
    `${API_ENDPOINT.NOW_PLAYING}?page=${page ? page : 1}`
  );
  return data;
};

const useMovieDataVer3 = (page) => {
  v3;
  return useQuery(["userData", page], () => fetchDataVer3(page));
};

export { fetchDataVer3, useMovieDataVer3 };

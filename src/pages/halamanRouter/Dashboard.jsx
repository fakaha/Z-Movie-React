import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useMovieDataSearchQuery } from '../../services/movie/get-data-movie-search';

export const Dashboard = () => {
    const data = useLocation()
    console.log('data', data);
    const [SearchData, setSearchData] = useState(data.state.searchDataMovie)

    const {data: dataSearch} = useMovieDataSearchQuery({
        query: SearchData
    })
    console.log('data search', dataSearch);

  return (
    <div>Dashboard</div>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom';

export const RenderDataSearch = (props) => {
    const navigate = useNavigate();
  return (        
        <div onClick={() => navigate(`/detail/${props.dataParent.id}`)} className='w-1/2 md:w-1/4 flex flex-col justify-center p-2 gap-3 my-6 border-2 rounded-xl border-gray-500 box-border hover:cursor-pointer'>
        <h2 className='text-center font-semibold text-sm md:text-md'>{props.dataParent.title}</h2>
        <div className="rating flex gap-1 px-3">
          {/* <img className='w-5' src={star} alt="" /> */}
          <p>{props.dataParent.vote_average}</p>
        </div>
        <img className='w-full h-auto rounded-xl' src={`https://image.tmdb.org/t/p/w500${props.dataParent.poster_path}`} alt="" />
    </div>    
  )
}

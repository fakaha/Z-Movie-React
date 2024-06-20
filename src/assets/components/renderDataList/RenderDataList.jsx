import React from 'react'
import star from '../../img/star.png'

export const RenderDataList = (props) => {
  return (
    <div className='w-1/4 flex flex-col justify-center p-2 gap-3 my-6 border-2 rounded-xl border-gray-500 box-border'>
        <h2 className='text-center font-semibold'>{props.dataParent.title}</h2>
        <div className="rating flex gap-1 px-3">
          <img className='w-5' src={star} alt="" />
          <p>{props.dataParent.vote_average}</p>
        </div>
        <img className='w-full h-auto rounded-xl' src={`https://image.tmdb.org/t/p/w500${props.dataParent.poster_path}`} alt="" />
    </div>
  )
}

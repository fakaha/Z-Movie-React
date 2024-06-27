import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
const navigate = useNavigate()
const [SearchData, setSearchData] = useState('panda')
// const id = 123

const pindah = () => {
    navigate("/dashboard",{
        state:{
            searchDataMovie: SearchData,
        }       
    })
}

// const pindahParams = () => {
//   navigate(`/dashboard/${id}`)
// }
  return (
    <div>
        <button onClick={() => pindah()}>Pindah</button>
        {/* <button onClick={() => pindahParams()}>Pindah Pakai Params</button> */}
    </div>
  )
}

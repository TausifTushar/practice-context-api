/* eslint-disable no-undef */

import { useContext } from 'react'
import './App.css'
import { MyContext } from './Components/Context/Context'
import AllCard from './Components/All Card/AllCard'


function App() {
   
    const {data, loading , use, userSearch} = useContext(MyContext)
    // const {loading} = useContext(MyContext)
   console.log(data)
  //  if(loading){
  //   return <div> Loading...</div>
    
   console.log(use)
  //  }

  // const handelSearch=(e)=>{
  //   console.log("Search Clicked")
  // }
   
  return (
    <>
      <h1 className='text-5xl'>All Card</h1>

      <input onChange={userSearch} type="search" placeholder="Search Here" className="input input-bordered w-full max-w-xs" />
      <button  className="btn ml-5 btn-primary">Search</button>
    <div className='flex flex-wrap gap-5'>
      {
        loading && <div> Loading...</div>
      }
    {
        data?.products?.map((pr)=><AllCard key={pr.id} pr={pr}></AllCard>)
      }
    </div>
    </>
  )
}

export default App

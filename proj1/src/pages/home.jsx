import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      homepage
      <button className=" bg-black text-zinc-100 p-5 rounded-lg hover:bg-slate-600">
        <Link to="/aboutus">Click on Me</Link>
      </button>
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <section className="topBarSection">
      <div className="companyTitle">
        <Link to='/' className='link'>
          <h2>FoodEx</h2>
        </Link>
      </div>
      <div className="searchBar">
        <input type="text" placeholder='Search...' />
      </div>
      <div className="userAuth">
        <Link to="/login" className="link">Login</Link>
        <span> / </span>
        <Link to="/signup" className="link">SignUp</Link>
      </div>
    </section>
  )
}

export default TopBar

import React from 'react';
import { Link } from 'gatsby';

const Underdevelopment = () => {
    return (
        <>
        <main className='error-page'>
          <div className='error-container'>
            <h1>This is Under Development</h1>
            <h2>Please check later</h2>
            <Link to='/' className='btn'>
              Home
            </Link>
          </div>
        </main>
      </>
    )
}

export default Underdevelopment

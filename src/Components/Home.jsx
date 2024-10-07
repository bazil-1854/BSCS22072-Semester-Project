import React from 'react'; 
import ListingsGrid from './Cards/ListingsGrid ';

const Home = ({ listings }) => {
  return (
    <div className='mt-[280px]'> 
      <ListingsGrid listings={listings} />
    </div>
  );
};

export default Home;

import { useState } from 'react';
import HorizontalScrollList from './HorizontalScrollList'; 
import ListingsGrid from './Cards/ListingsGrid ';

const Home = () => {
    const [category, setCategory] = useState('');
    return (
        <div className='mt-[150px]'>
            <HorizontalScrollList setCategory={setCategory} />
            <ListingsGrid category={category} />
        </div>
    )
}

export default Home

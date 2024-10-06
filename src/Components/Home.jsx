import ListingsGrid from './Cards/ListingsGrid ';

const Home = ({category}) => { 
    return (
        <div className='mt-[280px]'> 
            <ListingsGrid category={category} />
        </div>
    )
}

export default Home

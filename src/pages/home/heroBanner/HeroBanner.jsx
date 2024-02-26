import { useEffect, useState } from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
// import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import ImageSlider from '../../../components/imageSlider/ImageSlider';

const BACKDROP_URL = 'https://image.tmdb.org/t/p/original'
const HeroBanner = () => {
    const [background, setBackground] = useState('')
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    // const { url } = useSelector((state) => state.home)
    const { data, loading } = useFetch('/movie/upcoming')
    const [bgArray, setBgArray] = useState([]);

    useEffect(() => {
        const bg =
            BACKDROP_URL +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
        setBackground(bg)
    }, [data])

    useEffect(() => {
        setBgArray([...bgArray, data?.results?.map(item => BACKDROP_URL + item.backdrop_path)]);
    }, [data])

    const handleSearchQuery = (e) => {
        e.preventDefault()
        if (query.length > 0) {
        navigate(`/search/${query}`)
        }
    }

    return (
        <div className='heroBanner'>
        {!loading && (
            <div className='backdrop-img'>
                {/* {bgArray.length > 0 && <ImageSlider data={bgArray}/>} */}
                <Img src={background} className=''/>
            </div>
        )}
        <div className='opacityLayer'></div>
        <ContentWrapper>
            <div className='heroBannerContent'>
            <span className='title'>Welcome</span>
            <span className='subTitle'>
                Millions of movies & TV shows to discover. Explore now.
            </span>
            <div className='searchInput'>
                <form onSubmit={handleSearchQuery}>
                <input
                    type='text'
                    name=''
                    placeholder='Search for a movie or TV show....'
                    onChange={(e) => setQuery(e.target.value)}
                    id=''
                />
                <button type='Submit'>Search</button>
                </form>
            </div>
            </div>
        </ContentWrapper>
        </div>
    )
    }

export default HeroBanner;
import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';
import Home from './pages/home/Home';
import PageNotFound from './pages/404/PageNotFound';
import Details from "./pages/details/Details";
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    const dispatch = useDispatch();
    const { url } = useSelector((state) => state.home);
    useEffect(() => {
        fetchApiConfig();
        genresCall();
    });

    const fetchApiConfig = () => {
        fetchDataFromApi('/configuration').then((resp) => {
            const url = {
            backdrop: resp.data.images.secure_base_url + 'original',
            poster: resp.data.images.secure_base_url + 'original',
            profile: resp.data.images.secure_base_url + 'original',
            }
            dispatch(getApiConfiguration(url));
        });
    }

    const genresCall = async () => {
        let promises = [];
        let endPoints = ['tv', 'movie'];
        let allGenres = {};

        endPoints.forEach((url) => {
            promises.push(fetchDataFromApi(`/genre/${url}/list`));
        });

        const data = await Promise.all(promises);
        data.map(({genres}) => {
            return genres.map((item)=> (allGenres[item.id] = item))
        });

        dispatch(getGenres(allGenres));
    };

    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:mediaType/:id' element={<Details />} />
            <Route path='/explore/:mediaType' element={<Explore />} />
            <Route path='/search/:query' element={<SearchResult />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default App;
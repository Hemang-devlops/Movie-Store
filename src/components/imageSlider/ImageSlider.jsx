import { useState } from 'react';
import './styles.scss';
import Img from '../lazyLoadImage/Img';

function ImageSlider({data}) {
    const [currentIndex, SetCurrentIndex] = useState(0);
    const filteredData = data?.filter((element) => element !== undefined)

    console.log(filteredData, 'bg')

    return (
        <>
            {/* <div style={{backgroundImage: `url(${data[currentIndex]})`}}></div> */}
            <Img src={filteredData[currentIndex]} />
        </>
    )
}

export default ImageSlider;
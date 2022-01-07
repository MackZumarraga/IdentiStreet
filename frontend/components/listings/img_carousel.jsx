import React, {useState} from "react";

const ImageCarousel = ({listing}) => {
    const images = [
        {image: 'https://cdn.pixabay.com/photo/2021/11/08/00/30/living-room-6778197_960_720.jpg'},
        {image: 'https://cdn.pixabay.com/photo/2021/11/08/00/30/living-room-6778197_960_720.jpg'},
        {image: 'https://cdn.pixabay.com/photo/2021/11/08/00/30/living-room-6778197_960_720.jpg'}
    ]

    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    };

    
    return (
        <div className="carousel-holder">
            
            {images.map((img, idx) => {
                return (
                    <div className={idx === current ? 'image active' : 'image'}
                    key={idx}>
                        {idx === current && (
                            <img src={img.image} className="show-carousel-photo" />
                        )}
                        <div className="arrow-holders">
                            <div className="left-arrow" onClick={prevImage}>◄</div>
                            <div className="right-arrow" onClick={nextImage}>►</div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default ImageCarousel;
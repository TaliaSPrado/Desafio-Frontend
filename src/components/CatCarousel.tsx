import React from "react";
import Slider from "react-slick";
import "./CatCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Cat {
  id: string;
  url: string;
  name?: string;
  description?: string;
  gender?: "F" | "M";
}

interface CatCarouselProps {
  cats: Cat[];
}

const CatCarousel: React.FC<CatCarouselProps> = ({ cats }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, cats.length),
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="cat-carousel">
      <Slider {...settings}>
        {cats.map((cat) => (
          <div key={cat.id}>
            <div className="cat-tile">
              <img src={cat.url} alt={cat.name || cat.id} />
              <div className="cat-overlay">
                <div className="cat-info">
                  <h4>{cat.name || "Gatinho"}</h4>
                  <p>{cat.description || "Pronto para adoção!"}</p>
                  <div className="cat-icons">
                    <span>🐾</span>
                    <span>🐟</span>
                    <span>❤️</span>
                    {cat.gender === "F" && <span className="cat-female">♀</span>}
                    {cat.gender === "M" && <span className="cat-male">♂</span>}
                  </div>
                  <button className="adopt-btn">Quero Adotar!</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CatCarousel;

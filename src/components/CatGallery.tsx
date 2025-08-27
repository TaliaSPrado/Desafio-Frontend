import React from "react";
import './CatGallery.css';

interface CatGalleryProps {
  cats: { id: string; url: string; name?: string; description?: string; gender?: "F" | "M"; }[];
}

const CatGallery: React.FC<CatGalleryProps> = ({ cats }) => (
  <div className="cat-gallery">
    {cats.map((cat) => (
      <div className="cat-tile" key={cat.id}>
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
    ))}
  </div>
);
export default CatGallery;


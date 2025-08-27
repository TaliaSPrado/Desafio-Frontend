import React from "react";
import "./CatCardsGrid.css";

interface Cat {
  id: string;
  url: string;
  name?: string;
  description?: string;
  gender?: "F" | "M";
}

interface CatCardsGridProps {
  cats: Cat[];
}

const CatCardsGrid: React.FC<CatCardsGridProps> = ({ cats }) => (
  <div className="cat-cards-grid">
    {cats.map((cat) => (
      <div className="cat-card-bs" key={cat.id}>
        <img src={cat.url} alt={cat.name || cat.id} />
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
    ))}
  </div>
);

export default CatCardsGrid;

import React, { useEffect, useState } from "react";
import CatCarousel from "../components/CatCarousel";
import { fetchCats, Cat } from "../api/catsApi";
import "./PagesStyles.css";

const CatGalleryPage: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCats()
      .then(setCats)
      .catch(() => setError("Erro ao buscar gatos"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="main-cat-page">
      <h2>GATINHOS PARA ADOÇÃO</h2>
      {loading && <div style={{ color: '#fff', textAlign: 'center', margin: 32 }}>Carregando...</div>}
      {error && <div style={{ color: 'red', textAlign: 'center', margin: 32 }}>{error}</div>}
      {!loading && !error && <CatCarousel cats={cats} />}
    </div>
  );
};

export default CatGalleryPage;
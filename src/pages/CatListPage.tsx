import React, { useEffect, useState } from "react";
import { fetchTags } from "../api/tagsApi";
import { fetchCats, Cat } from "../api/catsApi";
import CatCard from "../components/CatCard";
import "./PagesStyles.css";

const CatListPage: React.FC = () => {
  
  const [tags, setTags] = useState<string[]>([]);
  const [expandedTag, setExpandedTag] = useState<string | null>(null);
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([fetchTags(), fetchCats()])
      .then(([tagsData, catsData]) => {
        setTags(tagsData);
        setCats(catsData);
      })
      .catch(() => setError("Erro ao buscar dados"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center my-5">Carregando...</div>;
  if (error) return <div className="text-center text-danger my-5">{error}</div>;

  return (
    <div className="main-cat-page">
      <h2>� Encontre seu novo amigo felino!</h2>
      <p style={{ color: "#a020f0", fontSize: 18, marginBottom: 32 }}>
        Clique em uma categoria para ver os gatinhos disponíveis para adoção. <span role="img" aria-label="cat">😻</span>
      </p>
      {tags.map((tag) => (
        <CatCard
          key={tag}
          tag={tag}
          expanded={expandedTag === tag}
          onExpand={() => setExpandedTag(expandedTag === tag ? null : tag)}
        >
          {expandedTag === tag && (
            <div>
              <div style={{ textAlign: "right", color: "#a020f0", fontWeight: 600 }}>
                Gatos disponíveis para adoção:
              </div>
              <ul className="list-unstyled mt-3">
                {cats
                  .filter((cat) => cat.tags.includes(tag))
                  .map((cat) => (
                    <li
                      key={cat.id}
                      style={{
                        background: "rgba(142,197,252,0.13)",
                        borderRadius: 8,
                        margin: "6px 0",
                        padding: "6px 12px",
                        fontWeight: 500,
                        fontFamily: "'Baloo 2', cursive",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        animation: "fadeIn 0.5s"
                      }}
                    >
                      <img
                        src={`https://cataas.com/cat/${cat.id}`}
                        alt={cat.id}
                        style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 8, marginRight: 12 }}
                      />
                      <span style={{ flex: 1 }}>{cat.id}</span>
                      <button className="adopt-btn">Quero Adotar!</button>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </CatCard>
      ))}
    </div>
  );
};

export default CatListPage;
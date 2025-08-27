import React from "react";
import './CatCard.css';

interface CatCardProps {
  tag: string;
  children?: React.ReactNode;
  onExpand?: () => void;
  expanded?: boolean;
}

const CatCard: React.FC<CatCardProps> = ({ tag, children, expanded, onExpand }) => {
  return (
    <div className="card my-3 shadow-sm cat-card" style={{ maxWidth: 500 }}>
      <div
        className="card-header d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer", fontWeight: "bold", fontSize: 18 }}
        onClick={onExpand}
    
      >
        {tag}
        <span className="badge bg-primary">{expanded ? "▲" : "▼"}</span>
      </div>
      {expanded && (
        <div className="card-body bg-light border-top border-primary">
          {children}
        </div>
      )}
    </div>
  );
};

export default CatCard;

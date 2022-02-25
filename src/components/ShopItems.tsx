import React from "react";

interface itemProps {
  items: { id: number; name: string; description: string };
}

const shopItems: React.FC<itemProps> = ({ items }) => {
  return (
    <div className = 'col-md-4' >
      <div className="card p-3">
        <h1 className="card-title">{items.name}</h1>
        <p className="card-text">{items.description}</p>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  );
};

export default shopItems;

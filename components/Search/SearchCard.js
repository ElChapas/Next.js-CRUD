import React from "react";

const SearchCard = () => {
  return (
    <div className="card">
      <div className="search-card">
        <div className="search-section">
            <input className="input search-input" placeholder="Buscar" type="text" />
            <i class="fas fa-search search-icon" ></i>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;

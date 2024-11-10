import React, { useState } from "react";

function PlantCard({ plant, onDelete }) {
  const [isInStock, setIsInStock] = useState(true);

  // Toggle in stock/out of stock
  const handleStockToggle = () => {
    setIsInStock((prevStatus) => !prevStatus);
  };

  // Handle delete button click
  const handleDeleteClick = () => {
    onDelete(plant.id); // Call the passed-down delete function with plant ID
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image || "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      {isInStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
      <button className="delete-button" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}

export default PlantCard;

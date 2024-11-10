import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantList from "./PlantList";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Fetch initial list of plants
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Handle deleting a plant
  const handleDelete = (id) => {
    // Optimistically update the UI
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));

    // Make DELETE request to backend
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    }).catch((error) => {
      console.error("Error deleting plant:", error);
    });
  };

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} onDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;

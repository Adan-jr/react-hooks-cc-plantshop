import React, { useState, useEffect } from "react";
import PlantPage from "./PlantPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <PlantPage />
      )}
    </div>
  );
}

export default App;

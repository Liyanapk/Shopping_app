import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/product", {
          method: "GET",
          credentials: "include", // Include cookies if needed
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        // Ensure data exists and is an array
        if (result && result.data) {
          setData(result.data);
        } else {
          throw new Error("No products found in the response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("Failed to fetch product data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={data}>
      {error ? <p>{error}</p> : children}
    </DataContext.Provider>
  );
};

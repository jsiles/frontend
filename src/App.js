import React, { useState, useEffect } from "react";
import axios from "axios";
import CmpProducts from "./components/CmpProducts";
import "./App.css";

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        console.log("Response:", response);
        setClients(response.data);
        console.log("Fetched clients:", clients);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="App">
      <h1>Lista de Productos</h1>
      <CmpProducts products={clients} />
    </div>
  );
}

export default App;

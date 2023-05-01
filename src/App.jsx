import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";
import RestaurantInfos from "./components/RestaurantInfo";
import Menu from "./components/Menu";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3200/");
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <RestaurantInfos restaurant={data.restaurant} />
        )}
      </Header>

      <main className="container">
        {isLoading ? <p>Loading...</p> : <Menu menu={data.categories} />}
        <div className="right-column">...</div>
      </main>
    </div>
  );
};

export default App;

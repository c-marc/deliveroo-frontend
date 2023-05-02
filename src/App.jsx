import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";
import RestaurantInfos from "./components/RestaurantInfo";
import Menu from "./components/Menu";
import Basket from "./components/Basket";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [basket, setBasket] = useState([]);

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

  const addToBasket = (id, title, price) => {
    const newBasket = [...basket];
    if (newBasket.some((item) => item.id === id)) {
      newBasket.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity++ } : item;
      });
    } else {
      newBasket.push({ id, title, price, quantity: 1 });
    }
    setBasket(newBasket);
  };

  return (
    <div className="app">
      <Header>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <RestaurantInfos restaurant={data.restaurant} />
        )}
      </Header>

      <main className="container columns">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Menu menu={data.categories} addToBasket={addToBasket} />
        )}
        <Basket
          className="right-column"
          basket={basket}
          setBasket={setBasket}
        />
      </main>
    </div>
  );
};

export default App;

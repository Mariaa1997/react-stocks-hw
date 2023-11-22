import React from "react"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Stock(props) {
  const apiKey = "2878a7fa70d9029c313a041e91c11941";
  const params = useParams();
  const symbol = params.symbol;
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;
  const [stock, setStock] = useState(null);

  const getStock = async () => {
    try {
      console.log(url)
      const response = await fetch(url);
      const data = await response.json();
      setStock(data[0]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getStock();
  }, []);


  const loaded = () => {
    return (
      <div>
        <h1>{stock.name}/{stock.symbol}</h1>
        <h2>Price: {stock.price}</h2>
        <h3>day high: {stock.dayHigh}</h3>
        <h3>day low: {stock.dayLow}</h3>
      </div>
    )
  }

  const loading = () => {
    return <h2>Loading...</h2>
  };

  return (
    stock && stock.price ? loaded() : loading()
  )}

export default Stock
import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/data")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>{data.description}</h1>
      <a href={data.link}>Click me</a>
    </>
  );
};

export default App;

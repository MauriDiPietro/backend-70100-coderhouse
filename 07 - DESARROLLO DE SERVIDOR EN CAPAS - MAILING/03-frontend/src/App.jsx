import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProd = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/products");
        const respJson = await response.json();
        const { data } = respJson;
        setProducts(data);
        // console.log(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchProd();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        products.map((prod) => {
          return (
            <p>
              {prod.name} - ${prod.price}
            </p>
          );
        })
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}

export default App;

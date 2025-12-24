import { createContext, useContext, useEffect, useState } from "react";

const productContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=200")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  return (
    <productContext.Provider value={{ products, loading }}>
      {children}
    </productContext.Provider>
  );
}

export function useProducts() {
  return useContext(productContext);
}

import { useState, useEffect } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchproducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/productss?limit=20&skip=10`
      );

      const result = await response.json();

      console.log(result)

      if (result && result.products && result.products.length) {
        
        setProducts((prevData) => {
          [...prevData, ...result.products];
        });

        console.log(products)
        setLoading(false);

      }
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  }

  useEffect(() => {
    fetchproducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableBtn(true);
    }
  }, [products]);

  

  return (
    <div className="container">
      
      <div className="product-container">
        {products && products.length
          ? products.map((item) => {
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.description}</p>
              </div>;
            })
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableBtn} onClick={() => setCount(count + 1)}>
          Load More products
        </button>
        {disableBtn ? <p>You've reached 100 products...</p> : null}
      </div>
    </div>
  );
}

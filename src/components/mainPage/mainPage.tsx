import { useEffect, useState } from "react";
import cc from "../../data/categories.json";
import products from "../../data/products.json";
import Card from "./Card";

function Page() {
  const [cartegory, setCartegory] = useState(" ");
  const url = window.location.href;
  const host = window.location.hostname;
  const cct: any = cc;

  useEffect(() => {
    const ff = url.split(host)[1];
    const categoryValue = ff.split("/")[1].split("main?cartegory=")[1];
    if (!categoryValue.includes(cct)) {
      setCartegory("all");
    }
    setCartegory(categoryValue);
  }, [url, host]);

  useEffect(() => {
    console.log(cartegory);
  }, [cartegory]);
  const electronicsProducts = products.filter(
    (product) => product.category === "electronics"
  );
  const JeweleryProducts = products.filter(
    (product) => product.category === "jewelery"
  );
  const MensProducts = products.filter(
    (product) => product.category === "men's clothing"
  );
  const WomensProducts = products.filter(
    (product) => product.category === "women's clothing"
  );
  return (
    <div>
      {cartegory === "electronics" ? (
        <div className="p-28 flex flex-wrap gap-2">
          {electronicsProducts.map((product) => (
            <div key={product.id}>
              <Card
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                category="electronics"
                rating={product.rating}
              />
            </div>
          ))}
        </div>
      ) : cartegory === "jewelery" ? (
        <div className="p-28 flex flex-wrap gap-2">
          {JeweleryProducts.map((product) => (
            <div key={product.id}>
              <Card
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                category="jewelary"
                rating={product.rating}
              />
            </div>
          ))}
        </div>
      ) : cartegory === "men%27s%20clothing" ? (
        <div className="p-28 flex flex-wrap gap-2">
          {MensProducts.map((product) => (
            <div key={product.id}>
              <Card
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                category="men's clothing"
                rating={product.rating}
              />
            </div>
          ))}
        </div>
      ) : cartegory === "women%27s%20clothing" ? (
        <div className="p-28 flex flex-wrap gap-2">
          {WomensProducts.map((product) => (
            <div key={product.id}>
              <Card
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                category="women's clothing"
                rating={product.rating}
              />
            </div>
          ))}
        </div>
      ) : (
        // For "all" category, render products from all categories
        <div className="p-28 flex flex-wrap gap-2">
          {products.map((product) => (
            <div key={product.id}>
              <Card
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                category={product.category}
                rating={product.rating}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;

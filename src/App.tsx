import { useState } from "react";

import "./App.css";
import UserCard from "./UserCard";

interface productInfoItem {
  productName: string;
  productPrice: number;
  productQty: number;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [productInfo, setProductInfo] = useState<productInfoItem>({
    productName: "Apple",
    productPrice: 2000,
    productQty: 2,
  });

  return (
    <>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>

      <h2>Name of product: {productInfo.productName}</h2>
      <button
        onClick={() =>
          setProductInfo((prevValue) => ({
            ...prevValue,
            productName: "Nokia",
          }))
        }
      >
        Update Product Name
      </button>

      <UserCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSo52lsg9lWw-sG-ija8tua9VlNHAJPDX_Q&s"
        age={20}
        name="Chima"
        numb_of_kids={20}
        marital_stat="Single"
        contactInfo={{ address: "Wuse", city: "Lagos", country: "Nigeria" }}
      />
    </>
  );
}

export default App;

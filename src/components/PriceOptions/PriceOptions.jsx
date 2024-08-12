import React, { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("memberShip.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error Fetching", err));
  }, []);
  return (
    <div className="m-12">
      <h3>PriceOption</h3>
      <div className="grid md:grid-cols-5 gap-2">
        {data.map((option) => (
          <PriceOption option={option} key={option.id}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;

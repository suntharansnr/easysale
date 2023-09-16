import React, { useEffect, useState } from "react";

export default function Filter() {
  const fruits = [
    "Apple",
    "Orange",
    "Pineapple",
    "Mango",
    "banana",
    "jack",
    "Gauah",
    "lime",
  ];

  const [search, setSearch] = useState("");
  const [filteredFruits, setFilteredFruits] = useState(fruits);

  useEffect(() => {
    if (search === "") {
      setFilteredFruits(fruits);
      return;
    }
    const filteredFruits = fruits.filter(
      (item) => item.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    setFilteredFruits(filteredFruits);
  }, [search]);

  return (
    <div>
      <div className="card">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        ></input>
        <ol>
          {filteredFruits && filteredFruits.map((fruit, i) => <li>{fruit}</li>)}
        </ol>
      </div>
    </div>
  );
}

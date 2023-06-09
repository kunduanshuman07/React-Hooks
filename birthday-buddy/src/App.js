import React, { useState } from "react";
import data from "./data";
const App = () => {
  const [people,setPeople]=useState(data);
  async function clearAll(){
    setPeople([]);
  }
  return (
    <div className="container">
      <h2>{people.length} birthdays today</h2>
      {people.length === 0 ? (
        <p>Loading...</p>
      ) : (
        people.map((person) => (
          <>
            <div className="person" key={person.id}>
              <img src={person.image} alt={person.name} />
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </>
        ))
      )}
      <button className="btn" onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default App;

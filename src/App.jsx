import { useState } from "react";
import { puppyList } from "./data.js";
import "./index.css"


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log("puppyList: ", puppyList);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
      <div className="App">
        {featPupId && (
          <div className="featured">
            <h2>{featuredPup.name} </h2>
            <ul>
              <li><span>Age:</span> {featuredPup.age}</li>
              <li><span>Email:</span> {featuredPup.email}</li>
            </ul>
          </div>
        )}

        {puppies.map((puppy) => {
          return (
            <div className="puppy-names">
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}{" "}
            </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

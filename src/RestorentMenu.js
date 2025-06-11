import { useEffect, useState } from "react";
import "./styles.css";
import { createBrowserRouter } from "react-router-dom";

export default function RestorentMenu() {
  const [btnnameReact, setBtnnameReact] = useState("Login");
  const [listOfRestorent, setListOfRestorent] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data.json();
    setListOfRestorent(json.recipes);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const filterList = listOfRestorent.filter((res) =>
            res.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setListOfRestorent(filterList);
        }}
      >
        Search
      </button>

      {listOfRestorent.map((data) => (
        <p key={data.id}>{data.name}</p>
      ))}

      <button
        onClick={() => {
          btnnameReact == "Login"
            ? setBtnnameReact("Logout")
            : setBtnnameReact("Login");
        }}
      >
        {btnnameReact}
      </button>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Search() {
  const [pokemon, setpokemon] = useState(null);
  const searchref = useRef(null);
  const [img, setimg] = useState("");
  useEffect(() => {
    console.log(pokemon);
  });
  function onclick(e) {
    console.log(searchref.current.value);
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchref.current.value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add other custom headers here if needed
        // 'Access-Control-Allow-Origin':'*'
      },
    })
      .then((res) => res.json())
      .then((body) => {
        setpokemon(body);
        setimg(body.sprites.front_default);
      })
      .catch((err) => console.log(err));
      searchref.current.value = null;
  }
  function handlekey(e)
  {
    if(e.key==='Enter')
    {
      onclick();
    }
  }
  return (
    <div>
      <input type="text" ref={searchref} onKeyDown={handlekey}></input>
      <button onClick={onclick}>search</button>
      {img && <img src={img}></img>}
    </div>
  );
}
function App() {
  return (
    <>
      <Search></Search>
    </>
  );
}

export default App;

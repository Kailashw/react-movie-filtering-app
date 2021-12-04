import "./App.css";
import { useState, useEffect } from "react";
import { movies } from "./data/index";
import MovieCard from "./view/MovieCard";

function App() {
  let [data, setData] = useState(movies);
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    data.map(el=> {
      categories.push(el.category.toLocaleLowerCase());
    })
    categories = new Set(categories);
    categories = Array.from(categories);
    setCategories(categories);
  }, [])

  const deleteFn = (id) => {
    data = data.filter((el) => el.id !== id);
    setData(data);
  };

  const toggleLike = (id, like) => {
    data.map((el) => {
      if (el.id === id) {
        like ? (el.likes += 1) : (el.likes -= 1);
      }
    });
    setData(data);
  };

  const categorySearch = (e)=>{
    data = data.filter(el=> el.category.toLocaleLowerCase() === e.target.innerText.toLocaleLowerCase())
    setData(data);
  }

  return (
    <div className="App">
      {
        categories && categories.map(element=> {
          return (<button name={element.category} onClick={(e) => categorySearch(e)}> {element} </button>)
        })
      }
      {data.map((el) => {
        return (
          <div key={el.id}>
            <MovieCard movie={el} deleteFn={deleteFn} toggleLike={toggleLike} />{" "}
          </div>
        );
      })}
    </div>
  );
}

export default App;

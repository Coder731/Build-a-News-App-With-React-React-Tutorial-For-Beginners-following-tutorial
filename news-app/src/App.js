import React, {useState,useEffect} from 'react';
import "./App.css";

const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=08aa08ce867c4d2eae07a4b968d1874c"

function App() {

  const  [data,setData] = useState({})

  useEffect(()=>{
    const fetchData = async () => {
      const resp = await fetch(url)
      const result = await resp.json()
    }


  },[])


  return (
    <div className="App">
      <h1>Welcome to News App</h1>
    </div>
  );
}

export default App;

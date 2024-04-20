import { useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Home from "./Home";

function Main() {

    const [news, setNews] = useState([]);


  const getNews = async () => {

    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-04-18&' +
          'sortBy=popularity&' +
          'apiKey=35839542f8864448a68e188adb9a8467';

var req = new Request(url);

    try {
      await fetch(req )
        .then((res) => res.json())
        .then((json) => setNews(json.articles));
    } catch (er) {
      console.error(er)
     }
  };


  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      <Navbar />
      <Menubar />
      <Home news={news}/>
    </>
  );
}

export default Main;

import { useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Home from "./Home";
import moment from "moment";

function Main() {

    const [news, setNews] = useState([]);


  const getNews = async () => {

    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-04-19&' +
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

  console.log(news[1]?.url);


  useEffect(() => {
    getNews();
  }, []);

  const date:any = new Date()


  return (
    <>
   
      <Navbar />
      <Menubar />
      <div className=" bg-gray-100 pt-5">
        <h1 className=" ml-28 text-3xl">Your briefing</h1>
        <h1 className=" ml-28 text-gray-500 text-sm mt-2">{moment(date).format("DD-MM-YY")}</h1>
      <Home news={news}/>
      </div>
      
    </>
  );
}

export default Main;

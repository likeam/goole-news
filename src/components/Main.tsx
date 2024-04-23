import { useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Home from "./Home";
import moment from "moment";
import News from "./News";

function Main() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState(" ");
  const [menu, setMenu] = useState("Pakistan");

  const getNews = async () => {
   
    try {
      await fetch(`https://newsapi.org/v2/everything?q=${menu ? menu : "politics"}&sortBy=popularity&apiKey=35839542f8864448a68e188adb9a8467`)
        .then((res) => res.json())
        .then((json) => setNews(json.articles));
    } catch (er) {
      console.error(er);
    }
  };


  useEffect(() => {
    getNews();
  }, [menu]);

  const date: any = new Date();

  return (
    <div className="bg-gray-200 ">
      <Navbar setSearch = {setSearch} />
      <Menubar setMenu = {setMenu} />
      <div className="w-screen pt-5 bg-gray-100 ">
        <h1 className="pl-16 text-3xl ml-28">Your briefing</h1>
        <h1 className="pl-16 mt-2 text-sm text-gray-500 ml-28">
          {moment(date).format("DD-MM-YY")}
        </h1>
        <hr className="mt-5 " />
        <Home news={news} />
      </div>
      <News news={news} search = {search} />
    </div>
  );
}

export default Main;

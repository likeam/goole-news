import { useEffect } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";

function Main() {
  const getNews = async () => {

    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          
          'sortBy=popularity&' +
          'apiKey=35839542f8864448a68e188adb9a8467';

var req = new Request(url);

    try {
      await fetch(req )
        .then((res) => res.json())
        .then((json) => console.log(json));
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
    </>
  );
}

export default Main;

type newProp = {
  news: any;
};

function Home(props: newProp) {
  return (
    <div className="flex items-center w-screen mt-5 bg-gray-400 pl-28">
      <div className="grid grid-cols-2 p-5 bg-white rounded-md">
        <a href={props?.news[1]?.url}>
          <div className=" w-72">
            <h1 className="text-xl text-blue-600 ">Top Stories</h1>
            <br className="mt-5 " />
            <img
              src={props?.news[1]?.urlToImage}
              className="rounded-md w-72 h-44"
            />
            <h1 className="text-sm font-bold ">
              {props?.news[1]?.source?.name.toUpperCase()}
            </h1>
            <h1 className="text-xl w-72 hover:underline">
              {props?.news[1]?.title}
            </h1>
          </div>
        </a>
        <div className=" w-60 ml-7">
          <h1 className="mt-3 text-xs font-semibold ">
            {props?.news[0]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[0]?.url}> <h1 className="text-sm hover:underline">{props?.news[0]?.title}</h1></a>
          <h1 className="mt-3 text-xs font-semibold ">
            {props?.news[2]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[2]?.url}><h1 className="text-sm hover:underline">{props?.news[2]?.title}</h1></a>
          <h1 className="mt-3 text-xs font-semibold ">
            {props?.news[3]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[3]?.url}><h1 className="text-sm hover:underline">{props?.news[3]?.title}</h1></a>
        </div>
      </div>
      <div>
      <h1>{props?.news[4]?.source?.name}</h1>
        <h1>{props?.news[4]?.title}</h1>
        <img src={props?.news[4]?.urlToImage} alt="news-4" />
      </div>
    </div>
  );
}

export default Home;

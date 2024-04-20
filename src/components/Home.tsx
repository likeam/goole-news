type newProp = {
  news: any;
};

function Home(props: newProp) {
  return (
    <div className=" flex items-center bg-gray-400 pl-28 mt-5 w-screen ">
      <div className="grid grid-cols-2 p-5 rounded-md bg-white">
        <a href={props?.news[1]?.url}>
          <div className=" w-72">
            <h1 className=" text-blue-600 text-xl">Top Stories</h1>
            <br className=" mt-5" />
            <img
              src={props?.news[1]?.urlToImage}
              className=" w-72 h-44 rounded-md"
            />
            <h1 className=" font-bold text-sm">
              {props?.news[1]?.source?.name.toUpperCase()}
            </h1>
            <h1 className="text-xl w-72 hover:underline">
              {props?.news[1]?.title}
            </h1>
          </div>
        </a>
        <div className=" w-60 ml-7">
          <h1 className=" font-semibold text-xs mt-3">
            {props?.news[0]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[0]?.url}> <h1 className="text-sm  hover:underline">{props?.news[0]?.title}</h1></a>
          <h1 className=" font-semibold text-xs mt-3">
            {props?.news[2]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[2]?.url}><h1 className="text-sm  hover:underline">{props?.news[2]?.title}</h1></a>
          <h1 className=" font-semibold text-xs mt-3">
            {props?.news[3]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[3]?.url}><h1 className="text-sm  hover:underline">{props?.news[3]?.title}</h1></a>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;

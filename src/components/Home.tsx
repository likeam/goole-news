type newProp = {
  news: any;
};

function Home(props: newProp) {
  return (
    <div className="flex w-screen pl-32 pr-32 bg-gray-100">
      <div className="grid w-8/12 grid-cols-2 p-5 bg-white rounded-md">
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
        <div className=" w-60">
          <h1 className="mt-3 text-xs font-semibold ">
            {props?.news[0]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[0]?.url}>
            {" "}
            <h1 className="text-sm hover:underline">{props?.news[0]?.title}</h1>
          </a>
          <h1 className="mt-3 text-xs font-semibold ">
            {props?.news[2]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[2]?.url}>
            <h1 className="text-sm hover:underline">{props?.news[2]?.title}</h1>
          </a>
          <h1 className="mt-3 text-xs font-semibold ">
            {props?.news[3]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[3]?.url}>
            <h1 className="text-sm hover:underline">{props?.news[3]?.title}</h1>
          </a>
        </div>
      </div>
      <div className="w-4/12 p-5 ml-3 bg-white rounded-lg ">
        <h1 className="text-2xl text-cyan-800">Local News</h1>
        <hr className="mt-3 " />

        <a href={props?.news[4]?.url}>
          <div className="flex items-center mt-3 ">
            <div>
              <h1 className="font-extrabold ">
                {props?.news[4]?.source?.name}
              </h1>
              <h1 className=" hover:underline">{props?.news[4]?.title}</h1>
            </div>
            <img
              src={props?.news[4]?.urlToImage}
              alt="news-4"
              className="w-16 h-16 rounded-xl"
            />
          </div>
        </a>
        <hr className="mt-3 " />
        <a href={props?.news[5]?.url}>
          <div className="flex items-center mt-3 ">
            <div>
              <h1 className="font-extrabold ">
                {props?.news[5]?.source?.name}
              </h1>
              <h1 className=" hover:underline">{props?.news[5]?.title}</h1>
            </div>
            <img
              src={props?.news[5]?.urlToImage}
              alt="news-4"
              className="w-16 h-16 rounded-xl"
            />
          </div>
        </a>
        <hr className="mt-3 " />
        <a href={props?.news[6]?.url}>
          <div className="flex items-center mt-3 ">
            <div>
              <h1 className="font-extrabold ">
                {props?.news[6]?.source?.name}
              </h1>
              <h1 className=" hover:underline">{props?.news[6]?.title}</h1>
            </div>
            <img
              src={props?.news[6]?.urlToImage}
              alt="news-4"
              className="w-16 h-16 rounded-xl"
            />
          </div>
        </a>
        
        
      </div>
    </div>
  );
}

export default Home;

type newProps = {
  news: any;
};

const News = (props: newProps) => {
  return (
    <div>
      <div className="grid w-10/12 grid-cols-3 p-5 mt-5 ml-32 bg-white rounded-lg ">
        {props?.news?.map((data: any) => {
          return (
            <a href={data.url}>
              <div className="flex items-center ml-5 border border-spacing-1">
                <div className="mt-3 ">
                  <h1 className="font-extrabold ">{data.source?.name}</h1>
                  <h1 className=" hover:underline">{data.title}</h1>
                </div>
                <img
                  src={data?.urlToImage}
                  alt="news-4"
                  className="w-16 h-16 rounded-xl"
                />
              </div>
            </a>
          );
        })}
        <h1 className="text-2xl text-cyan-800">Local News</h1>
        <hr className="mt-3 " />
      </div>
    </div>
  );
};

export default News;

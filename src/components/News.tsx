type newProps = {
  news: any;
  search : any
};

const News = (props: newProps) => {
  return (
    <div className="w-screen bg-gray-100 ">
      <div className="grid w-10/12 grid-cols-3 p-5 mt-5 ml-32 bg-white rounded-lg ">
        {props?.news?.filter((data:any) => data?.title?.includes(props?.search)).map((data: any) => {
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
       
      </div>
    </div>
  );
};

export default News;

const newsDetailsLoader = async ({ params }) => {
  const response = await fetch("../../public/data/news.json");
  const data = await response.json();
  const foundNews = data.find((element) => element._id == params?.id);

  return [foundNews,data];
};

export default newsDetailsLoader;

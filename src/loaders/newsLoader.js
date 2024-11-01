const newsLoader = async () =>{
    const response = await fetch("../../public/data/news.json");
    const data = await response.json();
    return data;
}

export default newsLoader;
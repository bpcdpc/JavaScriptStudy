const url =
  "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

fetch(url)
  .then((res) => res.json())
  .catch((error) => console.log(`Error #1: ${error.message}`))
  .then((data) => {
    if (!data) throw new Error("No Data.");
    if (!data.articleList || data.articleList.length === 0)
      throw new Error("No article.");
    return data.articleList;
  })
  .catch((error) => console.log(`Error #2: ${error.message}`))
  .then((articles) =>
    articles.map((article, index) => ({
      rank: index + 1,
      title: article.title,
    })),
  )
  .catch((error) => console.log(`Error #3: ${error.message}`))
  .then((result) => {
    for (let movie of result) {
      console.log(`[${movie.rank}위] ${movie.title}`);
    }
  })
  .catch((error) => console.log(`Error #4: ${error.message}`));

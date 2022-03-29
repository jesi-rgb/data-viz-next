import Link from "next/link";

export default function YoutubeViewsCount(videoData) {
  if (!videoData) {
    return (
      <>
        <h2>No results to display</h2>
      </>
    );
  }

  let outputData = [];
  console.log(videoData.data.items[0]);
  videoData.data.items.map((v) => {
    outputData.push({
      title: v.snippet.title,
      date: v.snippet.publishedAt,
      id: v.id,
      viewCount: v.statistics.viewCount,
      likeCount: v.statistics.likeCount,
      commentCount: v.statistics.commentCount,
    });
  });

  return (
    <>
      <ul className="text-gray-600">
        <h1>sup</h1>
        {outputData.map((v) => {
          return (
            <li className="font-serif flex flex-col mt-4" key={v.title}>
              <Link href={`https://www.youtube.com/watch?v=${v.id}`} passHref>
                <a>
                  <span className="font-bold">{v.title}</span>
                </a>
              </Link>{" "}
              <span className="font-sans text-gray-400">
                {v.viewCount} views
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

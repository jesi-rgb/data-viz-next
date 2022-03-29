export default function YoutubeViewsCount(videoData) {
  if (!videoData) {
    return (
      <>
        <h2>No results to display</h2>
      </>
    );
  }

  let outputData = [];
  videoData.data.items.map((v) => {
    outputData.push({
      title: v.snippet.title,
      date: v.snippet.publishedAt,
      viewCount: v.statistics.viewCount,
      likeCount: v.statistics.likeCount,
      commentCount: v.statistics.commentCount,
    });
  });

  return (
    <>
      <ul className="bg-slate-200 text-gray-600">
        <h1>sup</h1>
        {console.log(outputData)}
        {outputData.map((v) => {
          return (
            <li key={v.title}>
              <span>{v.title}</span> — <span>{v.viewCount}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

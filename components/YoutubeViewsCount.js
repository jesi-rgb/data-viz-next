import useSWR from "swr";

import fetcher from "@/lib/fetcher";

export default function YoutubeViewsCount({ videoData }) {
  //   const { videoData } = useSWR("/api/yt-video-plays", fetcher);

  //   console.log(videoData);
  if (!videoData) {
    return (
      <>
        <h2>No results to display</h2>
      </>
    );
  }

  let outputData = [];
  videoData.items.map((v) => {
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
      <ul>
        {outputData.map((v) => {
          <li>
            <span>{v.title}</span>
            <span>v.viewCount</span>
          </li>;
        })}
      </ul>
    </>
  );
}

export const getVideoDataFromChannel = async (id) => {
  const channelParams = new URLSearchParams({
    // order: "date",
    part: "snippet",
    playlistId: replaceAt(id, 1, "U"),
    maxResults: 30,
    key: process.env.YOUTUBE_PRIVATE_KEY,
  });

  let fetchVideosUrl = `https://www.googleapis.com/youtube/v3/playlistsItems?${channelParams}`;

  const responseVideoIds = await fetch(fetchVideosUrl);
  const channelVideos = await responseVideoIds.json();

  console.log(channelVideos);

  //   console.log(channelVideos);
  let videoIds = channelVideos.items.map((v) => v.id.videoId);

  const videoParams = new URLSearchParams({
    part: ["snippet", "contentDetails", "statistics"],
    id: videoIds,
    key: process.env.YOUTUBE_PRIVATE_KEY,
  });

  //   console.log(videoParams);

  const videoDataURL = `https://www.googleapis.com/youtube/v3/videos?${videoParams}`;
  const responseVideoData = await fetch(videoDataURL);
  const videoData = await responseVideoData.json();

  return videoData;
  //   console.log(videoData.items[0].statistics);
  //   console.log(videoData.items[0].snippet);

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

  return outputData;
};

function replaceAt(s, i, c) {
  const arr = [...s]; // Convert string to array
  arr[i] = c; // Set char c at pos i
  return arr.join(""); // Back to string
}

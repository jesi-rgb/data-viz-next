export const getVideoDataFromChannel = async (id) => {
  const channelParams = new URLSearchParams({
    part: ["snippet"],
    playlistId: replaceAt(id, 1, "U"),
    maxResults: 2,
    key: process.env.YOUTUBE_PRIVATE_KEY,
  });

  // example of correct request
  // https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUK8XIGR5kRidIw2fWqwyHRA&maxResults=5&key=AIzaSyDeCM2B3Eqa3scnrb3PioQqz9E0ADXgTXg

  let fetchVideosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?${channelParams}`;

  const responseVideoIds = await fetch(fetchVideosUrl);
  const channelVideos = await responseVideoIds.json();

  console.log(channelVideos);

  /**
   * this may already work, but we have no quota left. we'll see
   */
  let videoIds = channelVideos.items.map((v) => v.snippet.resourceId.videoId);

  const videoParams = new URLSearchParams({
    part: ["snippet", "contentDetails", "statistics"],
    id: videoIds,
    key: process.env.YOUTUBE_PRIVATE_KEY,
  });

  const videoDataURL = `https://www.googleapis.com/youtube/v3/videos?${videoParams}`;
  const responseVideoData = await fetch(videoDataURL);
  const videoData = await responseVideoData.json();

  console.log(videoData);
  return videoData;
};

function replaceAt(s, i, c) {
  const arr = [...s]; // Convert string to array
  arr[i] = c; // Set char c at pos i
  return arr.join(""); // Back to string
}

export const getTweetsFromUser = async (id) => {
  const queryParams = new URLSearchParams({
    max_results: 100,
    start_time: "2020-11-06T00:00:00Z",
    expansions:
      "author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id",
    "tweet.fields":
      "attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text",
    "user.fields": "id,name,profile_image_url,protected,url,username,verified",
    "media.fields":
      "duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics",
  });

  const response = await fetch(
    `https://api.twitter.com/2/users/${id}/tweets?${queryParams}`,
    {
      headers: {
        Authorization: "Bearer " + process.env.TWITTER_BEARER_TOKEN,
      },
    }
  );

  const tweets = await response.json();

  //   console.log(tweets);

  return tweets;
};

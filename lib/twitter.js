export const getTweetsFromUser = async (id) => {
  // code to regenerate the bearer token
  const credentials = `${process.env.TWITTER_API_KEY}:${process.env.TWITTER_API_KEY_SECRET}`;
  const credentialsBase64Encoded = new Buffer.from(credentials).toString(
    "base64"
  );

  const newToken = await fetch("https://api.twitter.com/oauth2/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentialsBase64Encoded}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: "grant_type=client_credentials",
  });

  const bearerTokenObject = await newToken.json();

  const bearerToken = bearerTokenObject.access_token;

  // now that we have the new bearer token, lets query the tweets
  const queryParams = new URLSearchParams({
    max_results: 6,
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
        Authorization: "Bearer " + bearerToken,
      },
    }
  );

  const tweets = await response.json();

  return tweets;
};

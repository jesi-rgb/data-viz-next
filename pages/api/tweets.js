/* eslint-disable import/no-anonymous-default-export */
import { getTweetsFromUser } from "@/lib/twitter";

export default async (_, res) => {
  const tweets = await getTweetsFromUser("1341685272162033665");
  return res.status(200).json(tweets);
};

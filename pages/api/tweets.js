/* eslint-disable import/no-anonymous-default-export */
import { getTweetsFromUser } from "@/lib/twitter";

export default async (_, res) => {
  const jrasconId = "449899511";
  const jesi_rgbId = "1341685272162033665";
  const tweets = await getTweetsFromUser(jrasconId);
  return res.status(200).json(tweets);
};

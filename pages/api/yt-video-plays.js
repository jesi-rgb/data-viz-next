/* eslint-disable import/no-anonymous-default-export */
import { getVideoDataFromChannel } from "@/lib/youtube";

export default async (_, res) => {
  let channelName = "Reducible";
  let channelID = "UCK8XIGR5kRidIw2fWqwyHRA"; // for Reducible
  let videoData = await getVideoDataFromChannel(channelID);

  return res.status(200).json(videoData);
};

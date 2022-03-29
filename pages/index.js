import Head from "next/head";
import CalendarHeatMap from "@/components/CalendarHeatMap";
import YoutubeViewsCount from "@/components/YoutubeViewsCount";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

export default function Home() {
  //   const [tweets, setTweets] = useState();
  const [youtubeData, setYoutubeData] = useState();

  //   useEffect(() => {
  //     const getData = async () => {
  //       const response = await fetch("/api/tweets");
  //       const data = await response.json();

  //       setTweets(data.data);
  //     };

  //     getData();
  //   }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/yt-video-plays");
      const data = await response.json();

      setYoutubeData(data);
    };

    getData();
  }, []);

  return (
    <div className="container">
      <Layout>
        {youtubeData && <YoutubeViewsCount data={youtubeData} />}

        {/* {tweets && <CalendarHeatMap data={tweets} />} */}
      </Layout>
    </div>
  );
}

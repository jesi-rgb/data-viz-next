import Head from "next/head";
import CalendarHeatMap from "@/components/CalendarHeatMap";
import YoutubeViewsCount from "@/components/YoutubeViewsCount";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import BarChartVideos from "@/components/BarChartVideos";
import BarChartRecharts from "@/components/BarChartRecharts";

export default function Home() {
  //   const [tweets, setTweets] = useState();

  //   useEffect(() => {
  //     const getData = async () => {
  //       const response = await fetch("/api/tweets");
  //       const data = await response.json();

  //       setTweets(data.data);
  //     };

  //     getData();
  //   }, []);

  const [youtubeData, setYoutubeData] = useState();
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/yt-video-plays");
      const data = await response.json();

      setYoutubeData(data);
    };

    getData();
  }, []);

  return (
    <div className="">
      <Layout>
        {/* {youtubeData && <YoutubeViewsCount data={youtubeData} />} */}
        {/* {youtubeData && <BarChartVideos data={youtubeData} />} */}
        {youtubeData && <BarChartRecharts data={youtubeData} />}

        {/* {tweets && <CalendarHeatMap data={tweets} />} */}
      </Layout>
    </div>
  );
}

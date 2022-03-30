import Link from "next/link";
import Image from "next/image";
export default function YoutubeViewsCount(videoData) {
  if (!videoData) {
    return (
      <>
        <h2>No results to display</h2>
      </>
    );
  }

  let outputData = [];
  let formatter = Intl.NumberFormat("en", { notation: "compact" });
  const rtf1 = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  console.log(videoData.data.items[0]);
  videoData.data.items.map((v) => {
    outputData.push({
      title: v.snippet.title,
      date: fromNow(v.snippet.publishedAt),
      id: v.id,
      viewCount: formatter.format(v.statistics.viewCount),
      likeCount: v.statistics.likeCount,
      commentCount: v.statistics.commentCount,

      thumbnail: v.snippet.thumbnails.high,
    });
  });

  return (
    <>
      <ul className="text-gray-600">
        {outputData.map((v) => {
          return (
            <li
              className="font-serif flex flex-col mb-20 border-t py-5"
              key={v.title}
            >
              <Link href={`https://www.youtube.com/watch?v=${v.id}`} passHref>
                <a>
                  <div>
                    <Image
                      alt=""
                      className="w-1 rounded-xl"
                      src={v.thumbnail.url}
                      width={v.thumbnail.width}
                      height={v.thumbnail.height}
                    />
                  </div>
                  <span className="font-bold">{v.title}</span>
                </a>
              </Link>{" "}
              <div className="flex flex-row font-sans space-x-2 text-gray-400">
                <span className="">{v.viewCount} views</span>
                <span className=""> ·</span>
                <span className="">{v.likeCount} likes</span>
                <span className=""> ·</span>
                <span className="">{v.date}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function fromNow(
  date,
  nowDate = Date.now(),
  rft = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" })
) {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;
  const intervals = [
    { ge: YEAR, divisor: YEAR, unit: "year" },
    { ge: MONTH, divisor: MONTH, unit: "month" },
    { ge: WEEK, divisor: WEEK, unit: "week" },
    { ge: DAY, divisor: DAY, unit: "day" },
    { ge: HOUR, divisor: HOUR, unit: "hour" },
    { ge: MINUTE, divisor: MINUTE, unit: "minute" },
    { ge: 30 * SECOND, divisor: SECOND, unit: "seconds" },
    { ge: 0, divisor: 1, text: "just now" },
  ];
  const now =
    typeof nowDate === "object"
      ? nowDate.getTime()
      : new Date(nowDate).getTime();
  const diff =
    now - (typeof date === "object" ? date : new Date(date)).getTime();
  const diffAbs = Math.abs(diff);
  for (const interval of intervals) {
    if (diffAbs >= interval.ge) {
      const x = Math.round(Math.abs(diff) / interval.divisor);
      const isFuture = diff < 0;
      return interval.unit
        ? rft.format(isFuture ? x : -x, interval.unit)
        : interval.text;
    }
  }
}

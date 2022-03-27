import useSWR from "swr";

import fetcher from "@/lib/fetcher";

export default function TwitterData() {
  const { data } = useSWR("/api/tweets", fetcher);

  if (!data) {
    return <></>;
  }

  let tweets = data.data;
  console.log("COMPONENT");
  return (
    <>
      <ul>
        {tweets.map((d) => (
          <li key={d.id} className="mt-3 border-t-2">
            {new Date(d.created_at).getMonth()}
          </li>
        ))}
      </ul>
    </>
  );
}

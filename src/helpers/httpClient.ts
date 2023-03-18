import got from "got";
import { userAgents } from "./userAgents";

const httpClient = async (url: string) => {
  const res = await got(`${url}&api_version=4&_format=json&_marker=0&ctx=web6dot0`, {
    method: "GET",
    headers: {
      'user-agent': userAgents[Math.floor(Math.random() * userAgents.length)]
    }
  }).json()
  return res
}

export { httpClient };

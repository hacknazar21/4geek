import process from "process";
import { GetServerSidePropsContext, PreviewData } from "next";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";

export async function getDataFromAPI<T>(
  endpoint: string,
  cookies: string
): Promise<T> {
  try {
    const headers = {};
    if (!!cookies) headers["Cookie"] = cookies;
    console.log(cookies);
    const result = await fetch(`${process.env.API_HOST}${endpoint}`, {
      headers,
      credentials: "include",
    });
    return await result.json();
  } catch (e) {
    console.log(e.message);
  }
}
export function isMobileView(
  ctx: GetServerSidePropsContext<NextParsedUrlQuery, PreviewData>
): boolean {
  return !!(
    ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
}

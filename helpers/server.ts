import process from "process";
import { GetServerSidePropsContext, PreviewData } from "next";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";

export async function getDataFromAPI<T>(endpoint: string): Promise<T> {
  try {
    const result = await fetch(`${process.env.API_HOST}${endpoint}`);
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

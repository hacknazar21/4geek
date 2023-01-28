import process from "process";

export async function getDataFromAPI<T>(endpoint: string): Promise<T> {
  try {
    const result = await fetch(`${process.env.API_HOST}${endpoint}`);
    return await result.json();
  } catch (e) {
    console.log(e.message);
  }
}

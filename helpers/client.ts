export async function getClientDataFromAPI<T>(url, setter, request) {
  const data: T = await request(url);
  setter(data);
}
